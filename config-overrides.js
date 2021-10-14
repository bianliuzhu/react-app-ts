/*
 * @Author: Gleason
 * @Date: 2021-09-24 11:32:44
 * @LastEditTime: 2021-10-14 14:32:19
 * @Description: webpack 配置(覆盖)
 */

const path = require("path");
const {
	override, // 覆盖函数
	addWebpackAlias, // 别名配置
	addLessLoader, // less loader
	fixBabelImports, // babel 导入 引入antd-mobile
} = require("customize-cra");
function pathResolve(pathUrl) {
	return path.join(__dirname, pathUrl);
}

const HOST = require("./src/api/Env");
console.log("http:" + HOST.device);
// const {
// 	REACT_APP_ENV, // 环境标识
// } = process.env;

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
		(config) => {
			return config;
		}
	),

	jest: (config) => {
		return config;
	},
	// worker
	// charge
	devServer: (configFunction) => (proxy, allowedHost) => {
		proxy = {
			"/device": {
				secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
				ws: false, // 是否启用websockets
				target: "http:" + HOST.device, // 代理目标
				changeOrigin: true, // 覆盖主机头来源
				pathRewrite: {
					"^/device": "",
				},
			},
			"/service": {
				secure: false,
				ws: false,
				target: "http:" + HOST.service,
				changeOrigin: true,
				pathRewrite: {
					"^/service": "",
				},
			},
			"/order": {
				secure: false,
				ws: false,
				target: "http:" + HOST.order,
				changeOrigin: true,
				pathRewrite: {
					"^/service": "",
				},
			},
			"/ue": {
				secure: false,
				ws: false,
				target: "http:" + HOST.ue,
				changeOrigin: true,
				pathRewrite: {
					"^/ue": "",
				},
			},
			"/oldfornewservice": {
				secure: false,
				ws: false,
				target: "http:" + HOST.oldfornewservice,
				changeOrigin: true,
				pathRewrite: {
					"^/oldfornewservice": "",
				},
			},
			"/quickorder": {
				secure: false,
				ws: false,
				target: "http:" + HOST.quickorder,
				changeOrigin: true,
				pathRewrite: {
					"^/quickorder": "",
				},
			},
			"/quickorderQ2": {
				secure: false,
				ws: false,
				target: "http:" + HOST.quickorderQ2,
				changeOrigin: true,
				pathRewrite: {
					"^/quickorderQ2": "",
				},
			},
			"/worker": {
				secure: false,
				ws: false,
				target: "http:" + HOST.worker,
				changeOrigin: true,
				pathRewrite: {
					"^/worker": "",
				},
			},
			"/charge": {
				secure: false,
				ws: false,
				target: "http:" + HOST.charge,
				changeOrigin: true,
				pathRewrite: {
					"^/charge": "",
				},
			},
		};
		return configFunction(proxy, allowedHost);
	},

	paths: (paths, env) => {
		return paths;
	},
};
