/*
 * @Description: 一个动态导入加载组件的高阶组件
 * @Author: Gleason
 * @Date: 2021-11-01 10:51:55
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-02 10:19:01
 */

import { useEffect } from "react";
// 组件分割
import loadable from "@loadable/component";
// 进度条
import NProgress from "nprogress";
// 延迟加载
import pMinDelay from "p-min-delay";
import "nprogress/nprogress.css";
/**
 * @description: loading 加载组件
 * @param {*}
 * @return {*}
 */
const LoadingComponent = () => {
	useEffect(() => {
		NProgress.start();
		return () => {
			NProgress.done();
		};
	}, []);

	return <div />;
};
/**
 * @description: 组件分割函数
 * @param {any} loader 组件
 * @return {*}
 */
const LoadableTemp = (loader: any) => {
	return loadable(() => pMinDelay(loader, 200), {
		fallback: <LoadingComponent />,
	});
};
export default LoadableTemp;
