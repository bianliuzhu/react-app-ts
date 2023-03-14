import path from 'path';

import { whenDev } from '@craco/craco';

// mock 插件
import MockjsWebpackPlugin from 'mock-service-plugin';
// px 单位转换成 rem
import PxToRem from 'postcss-pxtorem';
// less loader
import CracoLess from 'craco-less';
// import webpack from 'webpack';
// const glob = require('glob');

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
	plugins: [
		{
			plugin: CracoLess,
			options: {
				noIeCompat: true,
			},
		},
	],
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
			...whenDev(
				() => [
					new MockjsWebpackPlugin({
						path: path.join(__dirname, REACT_APP_MOCK_DATA_FOLDER as string),
						port: Number(REACT_APP_MOCK_PORT),
					}),
				],
				[],
			),
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
					rootValue: 100, // 换算基数，
					propList: ['*'],
					minPixelValue: 2,
					selectorBlackList: ['am-'], // 要忽略并保留为px的选择器，本项目我是用的vant ui框架，所以忽略他
					unitPrecision: 3, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
					exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
					mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
				}),
			], // 数组中提供的附加插件附加到现有配置中。
			env: {
				autoprefixer: {
					cascade: true,
					features: {
						'nesting-rules': true,
					},
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
