/*
 * @Author: your name
 * @Date: 2021-09-14 16:18:35
 * @LastEditTime: 2022-01-09 13:00:22
 * @LastEditors: Gleason
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\index.tsx
 */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.less';

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById('root'),
);

// 性能分析报告
reportWebVitals(() => {
	// console.log('性能分析', param);
});
