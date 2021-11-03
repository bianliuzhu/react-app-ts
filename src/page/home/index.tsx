/*
 * @Description: 404 页面
 * @Author: Gleason
 * @Date: 2021-11-01 11:29:54
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-03 15:00:07
 */

import { login } from 'api';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
	const history = useHistory();
	const Handle = async () => {
		const res = login();
		console.log(res);
	};
	const goAboutPage = () => {
		history.push('/about');
	};
	return (
		<div>
			<h1>主页</h1> <br />
			<button onClick={Handle}>发起请求</button>
			<button onClick={goAboutPage}>go about page</button>
		</div>
	);
};

export default HomePage;
