/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-14 11:52:20
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-17 09:59:22
 */
import axios from 'axios';

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
const PROXY_SYMBOL = IS_MOCK ? REACT_APP_ENV : DEFAULT_SYMBOL;

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
				console.warn('http码正常');
		}
		return status < 500;
	},
});

// 请求拦截
Dio.interceptors.request.use(
	(config: any) => {
		// 自定义 header，可添加项目 token
		// eslint-disable-next-line no-param-reassign
		config.headers.Authorization = sessionStorage.getItem('Authorization');

		return config;
	},
	(error: any) => {
		console.error(error);
	},
);

// 响应拦截
Dio.interceptors.response.use(
	(response: any) => {
		sessionStorage.setItem('Authorization', response.headers.Authorization);
		return response;
	},
	(error: any) => {
		console.error(error);
	},
);

export default Dio;
