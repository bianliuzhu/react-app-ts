/*
 * @Description: 首页组件
 * @Author: Gleason
 * @Date: 2021-11-01 18:16:55
 * @LastEditors: Gleason
 * @LastEditTime: 2022-05-18 00:57:17
 */

import { useState } from 'react';
import { Button } from 'antd-mobile';
import AboutPage from '../about';
import './index.less';

console.log('函数外');
const HomePage = () => {
	console.log('函数内 顶部');
	const [num, setNumber] = useState(0);
	const [count, setCount] = useState(0);

	/**
	 * @description: 处理 num 方法
	 * @param {*}
	 * @return {*}
	 */
	const handerNum = () => {
		for (let i = 0; i < 5; i++) {
			console.warn(`第${i}执行`);
			setTimeout(() => {
				console.log('set number 前', num);
				setNumber((state) => {
					console.log('set number 内', state, state + 1);
					return state + 1;
				});
				console.log('set number 后', num);
				console.log('---------------------------->');
			}, 1000);
			console.log('timer 后输出');
		}
	};

	/**
	 * @description: 处理 count 方法
	 * @param {*}
	 * @return {*}
	 */
	const handerCount = () => {
		for (let i = 0; i < 5; i++) {
			console.warn(`第${i}执行`);
			setTimeout(() => {
				console.log('set count 前', count);
				setCount(count + 1);
				console.log('set number 后', count);
				console.log('---------------------------->');
			}, 1000);
			console.log('timer 后输出');
		}
	};

	console.log(`return前, num: ${num}, count: ${count}`);

	return (
		<div>
			<Button onClick={handerNum}>number: {num}</Button>
			<hr />
			<Button onClick={handerCount}>count: {count}</Button>
			<AboutPage />
		</div>
	);
};

export default HomePage;
