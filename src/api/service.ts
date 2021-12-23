/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-13 16:56:39
 * @LastEditors: Gleason
 * @LastEditTime: 2021-12-23 16:13:09
 */
import Dio from './axios';
import QueryString from 'qs';
// import { Toast } from 'antd-mobile';
import CodeHandle from './code';

// 响应数据结构
interface Resonse {
	data: any; // `data` 由服务器提供的响应
	status: number; // `status` 来自服务器响应的 HTTP 状态码
	statusText: string; // `statusText` 来自服务器响应的 HTTP 状态信息
	headers: any; // `headers` 服务器响应的头
	config: any; // `config` 是为请求提供的配置信息
	request: any;
}

// 请求方法封装
class Service {
	// 进行中的请求
	pendingRequest = new Map();

	dio: (
		method: string,
		url: string,
		params: {},
		allData: boolean,
		loading: boolean,
		config?: {},
	) => Promise<unknown>;
	constructor() {
		this.dio = (
			method = 'post',
			url = '',
			params = {},
			allData = true,
			loading = true,
			config = {},
		) => {
			const situation = ['put', 'post', 'patch', 'delete'];
			// 打开 loading
			if (loading) console.log('loading...'); // Toast.loading('Loading...', 0);

			// 记录当前 请求key
			const reqKey = this.generateReqKey({
				method,
				url,
				params,
			});

			// 判断是否有该请求
			if (this.pendingRequest.has(reqKey)) {
				const timer = setTimeout(() => {
					this.pendingRequest.delete(reqKey);
					// Toast.hide();
					clearTimeout(timer);
				}, this.pendingRequest.get(reqKey));
				return;
			} else {
				this.pendingRequest.set(reqKey, 2000);
			}

			return new Promise((resolve, reject) => {
				Dio({
					method,
					url,
					params: method === 'get' ? params : {}, // GET 方法请求带参
					data: situation.includes(method)
						? QueryString.stringify(params, { arrayFormat: 'brackets' })
						: {}, // 其他方法请求带参
					...config,
				})
					.then((res: Resonse) => {
						// Toast.hide();
						if (!res) return;
						CodeHandle(res.data);
						resolve(allData ? res : res.data.data);
					})
					.catch((err: any) => {
						reject(err);
						// Toast.hide();
					});
			});
		};
	}
	/**
	 * @description: 根据当前请求的信息，生成请求 Key
	 * @param {*} config
	 * @return {*}
	 */
	generateReqKey(config) {
		const { method, url, params } = config;
		return [method, url, QueryString.stringify(params)].join('&');
	}
	get = (url = '', params: any = {}, allData = false, loading = true) =>
		this.dio('get', url, params, allData, loading);

	post = (url = '', params: any = {}, allData = false, loading = true) =>
		this.dio('post', url, params, allData, loading);

	put = (url = '', params: any = {}, allData = false, loading = true) =>
		this.dio('put', url, params, allData, loading);

	delete = (url = '', params: any = {}, allData = false, loading = true) =>
		this.dio('delete', url, params, allData, loading);
}
export default new Service();
