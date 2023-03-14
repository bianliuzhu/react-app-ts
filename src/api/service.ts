/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-13 16:56:39
 * @LastEditors: Gleason
 * @LastEditTime: 2023-03-14 21:54:11
 */
import Dio from './axios';
import QueryString from 'qs';
// import { Toast } from 'antd-mobile';
import CodeHandle from './code';

class Service {
	// 进行中的请求
	pendingRequest = new Map();

	dio(method = 'post', url = '', params = {}, allData = true, loading = true, config = {}) {
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
	}

	get(url = '', ...rest) {
		console.log(rest);
		return this.dio('get', url, ...rest);
	}

	post(url = '', params: any = {}, allData = false, loading = true) {
		return this.dio('post', url, params, allData, loading);
	}

	put(url = '', params: any = {}, allData = false, loading = true) {
		this.dio('put', url, params, allData, loading);
	}

	delete(url = '', params: any = {}, allData = false, loading = true) {
		return this.dio('delete', url, params, allData, loading);
	}

	/**
	 * @description: 根据当前请求的信息，生成请求 Key
	 * @param {*} config
	 * @return {*}
	 */
	private generateReqKey(config) {
		const { method, url, params } = config;
		return [method, url, QueryString.stringify(params)].join('&');
	}
}

export default new Service();
