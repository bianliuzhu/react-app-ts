/*
 * @Description: 首页组件
 * @Author: Gleason
 * @Date: 2021-11-01 18:16:55
 * @LastEditors: Gleason
 * @LastEditTime: 2022-01-09 14:33:59
 */
// import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'antd-mobile';
import { login } from 'api';
import './index.less';

console.log('函数外');
const HomePage = () => {
	console.log('函数内 顶部');
	// const history = useHistory();
	const [num, setNumber] = useState(0);
	const [count, setCount] = useState(0);

	/**
	 * @description: 注释快捷键冲突
	 * @param {*}
	 * @return {*}
	 */
	const Handle = async () => {
		const res = login();
		console.warn(res);
	};

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
			<Button onClick={Handle}>sdf</Button>
			<hr />
			<Button onClick={handerNum}>number: {num}</Button>
			<hr />
			<Button onClick={handerCount}>count: {count}</Button>
		</div>
	);
};

export default HomePage;
