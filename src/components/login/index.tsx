/*
 * @Description: 登录页面
 * @Author: Gleason
 * @Date: 2021-11-01 14:06:28
 * @LastEditors: Gleason
 * @LastEditTime: 2022-05-18 00:50:44
 */
import { useHistory } from 'react-router-dom';

import './index.less';

const LoginPage = () => {
	const history = useHistory();
	const loginHandle = () => {
		localStorage.setItem('user', JSON.stringify({ name: 'bianliuzhu', pwd: '12431234', auth: 1 }));
		history.push('/index');
	};
	return (
		<div className="login_container">
			<button onClick={loginHandle}>登录 </button>
		</div>
	);
};

export default LoginPage;
