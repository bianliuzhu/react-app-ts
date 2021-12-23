/*
 * @Author: Gleason
 * @Date: 2021-09-24 11:32:44
 * @LastEditTime: 2021-12-23 19:09:24
 * @Description: webpack 配置(覆盖) 此文件已经弃用
 */

const path = require('path');
const glob = require('glob');
const {
	override, // 覆盖函数
	addWebpackAlias, // 别名配置
	addLessLoader, // less loader
	fixBabelImports, // babel 导入 引入antd-mobile
	addWebpackPlugin, // 增加插件
	addPostcssPlugins, // 转换单位
} = require('customize-cra');


// mock 插件
const MockjsWebpackPlugin = require('mockplugin');
// 擦除无用 css
const PurgecssPlugin = require('purgecss-webpack-plugin');

const {
	NODE_ENV,
	REACT_APP_ENV, // 环境标识
	REACT_APP_MOCK_PORT, // mock服务 端口号
	REACT_APP_MOCK_DATA_FOLDER, // mock 数据文件夹
	REACT_APP_HOST_DEVICE, // 设备
	REACT_APP_HOST_SERVICE, // 服务
	REACT_APP_HOST_ORDER, // 订单
	REACT_APP_HOST_WORKER, // 工作台
} = process.env;

// 是否为生产模式
const IS_PROD = NODE_ENV === 'production';
// 是否为 mock 环境
const IS_MOCK = REACT_APP_ENV === 'mock';


/**
 * @description: 路径 处理
 * @param {String} pathUrl
 * @return {String} path
 */
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

/**
 * @description: webpack 插件处理
 * @param {*}
 * @return {Function}
 */
const PluginHandle = () => {
	// mock 环境下挂在 MockjsWebpackPlugin
	if (IS_MOCK) {
		return new MockjsWebpackPlugin({
			path: path.join(__dirname, REACT_APP_MOCK_DATA_FOLDER),
			port: Number(REACT_APP_MOCK_PORT),
		});
	}

	if (IS_PROD) {
		console.log(11111111)
		new PurgecssPlugin({
			paths: glob.sync(`./src/**/*.tsx`, { nodir: true }),
		})
	}

	return () => { };
};

// override
module.exports = {
	webpack: override(
		addWebpackAlias({
			'@': pathResolve('./src'),
			'@img': pathResolve('./src/assets/image'),
			api: pathResolve('./src/api'),
			store: pathResolve('./src/store'),
			page: pathResolve('./src/page'),
			utils: pathResolve('./src/utils'),
			routes: pathResolve('./src/router'),
		}),
		addLessLoader({
			lessOptions: {
				javascriptEnabled: true,
				localIdentName: '[local]--[hash:base64:5]',
			},
		}),
		addPostcssPlugins([
			require('postcss-pxtorem')({
				rootValue: 75,
				propList: ['*'],
				minPixelValue: 2,
				selectorBlackList: ['am-'],
			}),
		]),
		fixBabelImports('import', {
			libraryName: 'antd-mobile',
			style: 'css',
		}),
		addWebpackPlugin(PluginHandle()),
		(config) => {
			return config;
		},
	),

	jest: (config) => {
		return config;
	},
	devServer: (configFunction) => (proxy, allowedHost) => {
		proxy = {
			'/device-api': {
				secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
				ws: false, // 是否启用websockets
				// target: "http:" + HOST.device, // 代理目标
				target: REACT_APP_HOST_DEVICE, // 代理目标
				changeOrigin: true, // 覆盖主机头来源
				pathRewrite: {
					'^/device-api': '',
				},
			},
			'/service-api': {
				secure: false,
				ws: false,
				// target: "http:" + HOST.service,
				target: REACT_APP_HOST_SERVICE,
				changeOrigin: true,
				pathRewrite: {
					'^/service-api': '',
				},
			},
			'/order-api': {
				secure: false,
				ws: false,
				// target: "http:" + HOST.order,
				target: REACT_APP_HOST_ORDER,
				changeOrigin: true,
				pathRewrite: {
					'^/service-api': '',
				},
			},
			'/worker-api': {
				secure: false,
				ws: false,
				// target: "http:" + HOST.worker,
				target: REACT_APP_HOST_WORKER,
				changeOrigin: true,
				pathRewrite: {
					'^/worker-api': '',
				},
			},
			[`/${REACT_APP_ENV}`]: {
				secure: false,
				ws: false,
				target: `http://localhost:${REACT_APP_MOCK_PORT}`,
				changeOrigin: true,
				pathRewrite: {
					[`^/${REACT_APP_ENV}`]: '',
				},
			},
		};
		return configFunction(proxy, allowedHost);
	},
	paths: (paths, env) => {
		return paths;
	},
};
