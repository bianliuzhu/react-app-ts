/*
 * @Author: your name
 * @Date: 2021-09-14 16:18:35
 * @LastEditTime: 2021-10-21 17:10:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "store";
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// 性能分析报告
reportWebVitals((param) => {
	console.log("性能分析", param);
});
