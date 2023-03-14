/*
 * @Author: Gleason
 * @Date: 2021-09-14 16:18:32
 * @LastEditTime: 2022-03-12 21:27:09
 * @Description:
 */

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@/routes/loadable';

const MainPart = loadable(import(/* webpackChunkName: 'MainPart' */ '@/components/main'));

const View404 = loadable(import(/* webpackChunkName: '404' */ '@/components/404'));

const View500 = loadable(import(/* webpackChunkName: '500' */ '@/components/500'));

const LoginPart = loadable(import(/* webpackChunkName: 'login' */ '@/components/login'));

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact render={() => <Redirect to="/index" />} />
			<Route path="/500" component={View500} />
			<Route path="/404" component={View404} />
			<Route path="/login" component={LoginPart} />
			<Route component={MainPart} />
		</Switch>
	</BrowserRouter>
);

export default App;
