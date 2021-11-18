/*
 * @Description: 首页组件
 * @Author: Gleason
 * @Date: 2021-11-01 18:16:55
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-17 14:38:38
 */
import { login } from 'api';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
	const history = useHistory();

	/**
	 * @description: 注释快捷键冲突
	 * @param {*}
	 * @return {*}
	 */
	const Handle = async () => {
		const res = login();
		console.warn(res);
	};

	const goAboutPage = () => history.push('/about');

	return (
		<div>
			<h1>主页</h1> <br />
			<button onClick={Handle}>发起请求</button>
			<br />
			<button onClick={goAboutPage}>go about page</button>
			<br />
			<button onClick={() => history.push('/device')}>go device page</button>
		</div>
	);
};

export default HomePage;
