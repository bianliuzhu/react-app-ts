/*
 * @Author: your name
 * @Date: 2021-09-14 16:18:35
 * @LastEditTime: 2021-12-23 16:34:54
 * @LastEditors: Gleason
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from 'store';
import './index.less';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// 性能分析报告
reportWebVitals(() => {
	// console.log('性能分析', param);
});
