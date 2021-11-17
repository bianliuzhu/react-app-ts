/*
 * @Description: 路由列表
 * @Author: Gleason
 * @Date: 2021-11-01 11:31:21
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-02 18:18:43
 */
import loadable from '@/routes/loadable';

const routes = [
	{
		path: '/index',
		exact: true,
		name: 'index',
		component: loadable(import(/* webpackChunkName: 'about' */ '@/page/home')),
		auth: [1],
	},
	{
		path: '/about',
		exact: true,
		name: 'about',
		component: loadable(import(/* webpackChunkName: 'about' */ '@/page/about')),
		auth: [1],
	},
	// {
	// 	path: "/one/two/three",
	// 	exact: false, name: "三级",
	// 	component: Three
	// },
];

export default routes;
