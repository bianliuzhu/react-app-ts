/*
 * @Author: Gleason
 * @Date: 2021-09-14 16:18:32
 * @LastEditTime: 2021-11-02 15:14:52
 * @Description:
 */

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import loadable from "@/routes/loadable";

// 公共模块
const Index = loadable(
	import(/* webpackChunkName: 'default' */ "@/components/index")
);

// 基础页面
const View404 = loadable(
	import(/* webpackChunkName: '404' */ "@/components/404")
);
const View500 = loadable(
	import(/* webpackChunkName: '500' */ "@/components/500")
);
const Login = loadable(
	import(/* webpackChunkName: 'login' */ "@/components/login")
);

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact render={() => <Redirect to="/index" />} />
			<Route path="/500" component={View500} />
			<Route path="/404" component={View404} />
			<Route path="/login" component={Login}></Route>
			<Route component={Index} />
		</Switch>
	</BrowserRouter>
);

export default App;
