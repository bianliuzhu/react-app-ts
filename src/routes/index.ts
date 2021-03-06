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
		component: loadable(import(/* webpackChunkName: 'homepage' */ '@/page/home')),
		auth: [1],
	},
	{
		path: '/about',
		exact: true,
		name: 'about',
		component: loadable(import(/* webpackChunkName: 'about' */ '@/page/about')),
		auth: [1],
	},
	{
		path: '/device',
		exact: true,
		name: 'device',
		component: loadable(import(/* webpackChunkName: 'device' */ '@/page/device')),
		auth: [1],
	},
];

export default routes;
