/*
 * @Author: Gleason
 * @Date: 2021-09-24 11:32:44
 * @LastEditTime: 2021-10-21 09:52:57
 * @Description: webpack 配置(覆盖)
 */

const path = require("path");
const {
	override, // 覆盖函数
	addWebpackAlias, // 别名配置
	addLessLoader, // less loader
	fixBabelImports, // babel 导入 引入antd-mobile
	addWebpackPlugin, // 增加插件
} = require("customize-cra");

// mock 插件
const MockjsWebpackPlugin = require("mockplugin");

const {
	HOST_DEVICE, // 设备
	HOST_SERVICE, // 服务
	HOST_ORDER, // 订单
	HOST_WORKER, // 工人认证
	HOST_CHARGE, // 京工巧匠小程序-收费线上化
	REACT_APP_ENV, // 环境标识
	REACT_APP_MOCK_PORT, // mock服务 端口号
	REACT_APP_MOCK_DATA_FOLDER, // mock 数据文件夹
} = process.env;

console.log(REACT_APP_MOCK_DATA_FOLDER, REACT_APP_MOCK_PORT);

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
	if (REACT_APP_ENV === "mock") {
		return new MockjsWebpackPlugin({
			path: path.join(__dirname, REACT_APP_MOCK_DATA_FOLDER),
			port: Number(REACT_APP_MOCK_PORT),
		});
	}
	return () => {};
};

// override
module.exports = {
	webpack: override(
		addWebpackAlias({
			"@": pathResolve("./src"),
			assets: pathResolve("./src/assets"),
			components: pathResolve("./src/components"),
			utils: pathResolve("./src/utils"),
			layout: pathResolve("./src/layout"),
			pages: pathResolve("./src/pages"),
			style: pathResolve("./src/assets/style"),
			reducer: pathResolve("./src/reducer"),
			store: pathResolve("./src/store"),
			action: pathResolve("./src/action"),
		}),
		addLessLoader({
			lessOptions: {
				javascriptEnabled: true,
				localIdentName: "[local]--[hash:base64:5]",
			},
		}),
		fixBabelImports("import", {
			libraryName: "antd-mobile",
			style: "css",
		}),
		addWebpackPlugin(PluginHandle()),
		(config) => {
			return config;
		}
	),

	jest: (config) => {
		return config;
	},
	devServer: (configFunction) => (proxy, allowedHost) => {
		proxy = {
			"/device": {
				secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
				ws: false, // 是否启用websockets
				// target: "http:" + HOST.device, // 代理目标
				target: "http:" + HOST_DEVICE, // 代理目标
				changeOrigin: true, // 覆盖主机头来源
				pathRewrite: {
					"^/device": "",
				},
			},
			"/service": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.service,
				target: "http:" + HOST_SERVICE,
				changeOrigin: true,
				pathRewrite: {
					"^/service": "",
				},
			},
			"/order": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.order,
				target: "http:" + HOST_ORDER,
				changeOrigin: true,
				pathRewrite: {
					"^/service": "",
				},
			},
			"/worker": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.worker,
				target: "http:" + HOST_WORKER,
				changeOrigin: true,
				pathRewrite: {
					"^/worker": "",
				},
			},
			[`/${REACT_APP_ENV}`]: {
				secure: false,
				ws: false,
				target: `http://localhost:${REACT_APP_MOCK_PORT}`,
				changeOrigin: true,
				pathRewrite: {
					[`^/${REACT_APP_ENV}`]: "",
				},
			},
		};
		return configFunction(proxy, allowedHost);
	},
	paths: (paths, env) => {
		return paths;
	},
};
