/*
 * @Description: 组件入口页
 * @Author: Gleason
 * @Date: 2021-11-01 11:30:14
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-02 18:13:39
 */
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import routes from "@/routes";

// 捕获错误边界组件
import ErrorBoundary from "@/components/error";

const MainPart = (props) => {
	let { auth } = JSON.parse(localStorage.getItem("user"))
		? JSON.parse(localStorage.getItem("user"))
		: "";

	return (
		<ErrorBoundary>
			<Switch>
				{routes.map((item) => {
					return (
						<Route
							key={item.path}
							path={item.path}
							exact={item.exact}
							render={(props) =>
								!auth ? (
									<item.component {...props} />
								) : item.auth && item.auth.indexOf(auth) !== -1 ? (
									<item.component {...props} />
								) : (
									<Redirect to="/404" {...props} />
								)
							}
						></Route>
					);
				})}
				<Redirect to="/404" />
			</Switch>
		</ErrorBoundary>
	);
};

export default withRouter(MainPart);
