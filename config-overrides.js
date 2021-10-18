/*
 * @Author: Gleason
 * @Date: 2021-09-24 11:32:44
 * @LastEditTime: 2021-10-18 10:39:37
 * @Description: webpack 配置(覆盖)
 */

const path = require("path");
const {
	override, // 覆盖函数
	addWebpackAlias, // 别名配置
	addLessLoader, // less loader
	fixBabelImports, // babel 导入 引入antd-mobile
} = require("customize-cra");

const {
	HOST_DEVICE, // 设备
	HOST_SERVICE, // 服务
	HOST_ORDER, // 订单
	HOST_UE, // UE
	HOST_OLDFORNEWSERVICE, // 以旧换新
	HOST_QUICKORDER, // 一键下单
	HOST_QUICKORDERQ2, // 一键下单二期
	HOST_WORKER, // 工人认证
	HOST_CHARGE, // 京工巧匠小程序-收费线上化
} = process.env;

function pathResolve(pathUrl) {
	return path.join(__dirname, pathUrl);
}

// const HOST = require("./src/api/Env");
// let temp = HOST.get(REACT_APP_ENV);
// console.log(temp);
// console.log("http:" + HOST.get(REACT_APP_ENV));

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
			"/ue": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.ue,
				target: "http:" + HOST_UE,
				changeOrigin: true,
				pathRewrite: {
					"^/ue": "",
				},
			},
			"/oldfornewservice": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.oldfornewservice,
				target: "http:" + HOST_OLDFORNEWSERVICE,
				changeOrigin: true,
				pathRewrite: {
					"^/oldfornewservice": "",
				},
			},
			"/quickorder": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.quickorder,
				target: "http:" + HOST_QUICKORDER,
				changeOrigin: true,
				pathRewrite: {
					"^/quickorder": "",
				},
			},
			"/quickorderQ2": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.quickorderQ2,
				target: "http:" + HOST_QUICKORDERQ2,
				changeOrigin: true,
				pathRewrite: {
					"^/quickorderQ2": "",
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
			"/charge": {
				secure: false,
				ws: false,
				// target: "http:" + HOST.charge,
				target: "http:" + HOST_CHARGE,
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
