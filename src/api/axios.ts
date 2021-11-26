/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-14 11:52:20
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-26 14:58:22
 */
import axios from 'axios';
import QS from 'qs';

const {
	NODE_ENV, // 环境变量
	REACT_APP_ENV, // 环境标识
} = process.env;

// 是否为 mock 环境
const IS_MOCK = REACT_APP_ENV === 'mock';

// 是否为生产模式
const IS_PROD = NODE_ENV === 'production';

// 路径名称
const pathname = window.location.pathname.split('/')[3] || '/';

const DEFAULT_SYMBOL = pathname === '/' ? 'device' : pathname;

// 开发环境: 代理标识
const PROXY_SYMBOL = IS_MOCK ? REACT_APP_ENV : `${DEFAULT_SYMBOL}-api`;

// 生产环境: 正式域名
const HOST_URL = process.env[`REACT_APP_HOST_${DEFAULT_SYMBOL.toUpperCase()}`];

// 基础URL
const baseurl = IS_PROD ? HOST_URL : PROXY_SYMBOL;

// 创建 axios 实例
const Dio: any = axios.create({
	// 设置baseUr地址,如果通过proxy跨域可直接填写base地址
	baseURL: baseurl,

	// 定义统一的请求头部
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		// 'Content-Type': 'application/json'
	},

	// 配置请求超时时间
	timeout: 10000,
	// http 状态码判断
	validateStatus(status: number) {
		switch (status) {
			case 404:
				console.error('失去页面页');
				break;
			case 500:
				console.error('服务错误页');
				break;
			default:
				console.log('http码正常');
		}
		return status < 500;
	},
});

/**
 * @description: 根据当前请求的信息，生成请求 Key
 * @param {*} config
 * @return {*}
 */
function generateReqKey(config) {
	const { method, url, params, data } = config;
	return [method, url, QS.stringify(params), QS.stringify(data)].join('&');
}

const pendingRequest = new Map();

/**
 * @description: 当前请求信息添加到 pendingRequest 对象中
 * @param {*} config
 * @return {*}
 */
function addPendingRequest(config) {
	const requestKey = generateReqKey(config);
	config.cancelToken =
		config.cancelToken ||
		new axios.CancelToken((cancel) => {
			if (!pendingRequest.has(requestKey)) {
				pendingRequest.set(requestKey, cancel);
			}
		});
}
function removePendingRequest(config) {
	const requestKey = generateReqKey(config);
	console.log('requestKey', requestKey);
	if (pendingRequest.has(requestKey)) {
		const cancelToken = pendingRequest.get(requestKey);
		cancelToken(requestKey);
		pendingRequest.delete(requestKey);
	}
}
// 请求拦截
Dio.interceptors.request.use(
	(config: any) => {
		console.log('请求拦截');
		// 自定义 header，可添加项目 token
		config.headers.Authorization = sessionStorage.getItem('Authorization');
		removePendingRequest(config); // 检查是否存在重复请求，若存在则取消已发的请求
		addPendingRequest(config); // 把当前请求信息添加到pendingRequest对象中

		return config;
	},
	(error: any) => {
		console.error('request interceptors', error);
	},
);

// 响应拦截
Dio.interceptors.response.use(
	(response: any) => {
		sessionStorage.setItem('Authorization', response.headers.Authorization);
		removePendingRequest(response.config); // 从pendingRequest对象中移除请求
		return response;
	},
	(error: any) => {
		removePendingRequest(error.config || {}); // 从pendingRequest对象中移除请求
		if (axios.isCancel(error)) {
			console.warn(`已取消的重复请求：${error.message}`);
		} else {
			// 添加异常处理
		}
		return Promise.reject(error);
	},
);

export default Dio;
