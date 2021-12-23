import path from 'path';
// const glob = require('glob');

// mock 插件
import MockjsWebpackPlugin from 'mockplugin';
// px 单位转换成 rem
import PxToRem from 'postcss-pxtorem';
// less loader
import CracoLessPlugin from 'craco-less';

// import CracoAntDesignPlugin from 'craco-antd';
const {
	// NODE_ENV,
	REACT_APP_ENV, // 环境标识
	REACT_APP_MOCK_PORT, // mock服务 端口号
	REACT_APP_MOCK_DATA_FOLDER, // mock 数据文件夹
	REACT_APP_HOST_DEVICE, // 设备
	REACT_APP_HOST_SERVICE, // 服务
	REACT_APP_HOST_ORDER, // 订单
	REACT_APP_HOST_WORKER, // 工作台
} = process.env;

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
	plugins: [{ plugin: CracoLessPlugin }],
	webpack: {
		alias: {
			'@': pathResolve('./src'),
			'@img': pathResolve('./src/assets/image'),
			api: pathResolve('./src/api'),
			store: pathResolve('./src/store'),
			page: pathResolve('./src/page'),
			utils: pathResolve('./src/utils'),
			routes: pathResolve('./src/router'),
		},
		plugins: [
			new MockjsWebpackPlugin({
				path: path.join(__dirname, REACT_APP_MOCK_DATA_FOLDER),
				port: Number(REACT_APP_MOCK_PORT),
			}),
		],
	},
	babel: {
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						chrome: '49',
						ios: '10',
					},
				},
			],
		],
	},
	devServer: {
		proxy: {
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
		},
	},
	typescript: {
		enableTypeChecking: true,
	},
	style: {
		modules: {
			localIdentName: '',
		},
		css: {
			loaderOptions: {
				/* 任意 css-loader 配置选项: https://github.com/webpack-contrib/css-loader. */
			},
		},
		sass: {
			loaderOptions: {
				/* 任意 sass-loader 配置选项: https://github.com/webpack-contrib/sass-loader. */
			},
		},
		postcss: {
			mode: 'extends' /* 默认值 */ || 'file',
			plugins: [
				PxToRem({
					rootValue: 75,
					propList: ['*'],
					minPixelValue: 2,
					selectorBlackList: ['am-'],
				}),
			], // 数组中提供的附加插件附加到现有配置中。
			env: {
				autoprefixer: {
					/* 任何自动引用器选项: https://github.com/postcss/autoprefixer#options */
				},
				stage: 3 /* 任何有效 stages: https://cssdb.org/#staging-process. */,
				features: {
					/* 任意 CSS 功能: https://preset-env.cssdb.org/features. */
				},
			},
			loaderOptions: {
				/* 任意 postcss-loader 配置选项: https://github.com/postcss/postcss-loader. */
			},
			// loaderOptions: (postcssLoaderOptions, { env, paths }) => { return postcssLoaderOptions; }
		},
	},
};
