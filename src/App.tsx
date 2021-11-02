/*
 * @Author: Gleason
 * @Date: 2021-09-14 16:18:32
 * @LastEditTime: 2021-11-02 18:18:01
 * @Description:
 */

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import loadable from "@/routes/loadable";

const Main = loadable(
	import(/* webpackChunkName: 'MainPart' */ "@/components/main")
);

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
			<Route component={Main} />
		</Switch>
	</BrowserRouter>
);

export default App;
