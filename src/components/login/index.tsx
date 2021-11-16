/*
 * @Description: 登录页面
 * @Author: Gleason
 * @Date: 2021-11-01 14:06:28
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-15 18:08:23
 */
import { WingBlank, Card, InputItem, Button } from 'antd-mobile';
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
			<WingBlank size="md">
				<Card>
					<Card.Header
						title="登录"
						thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
					/>
					<Card.Body>
						<InputItem placeholder="请输入用户名">用户名</InputItem>
						<InputItem type="password" placeholder="请输入密码">
							密码
						</InputItem>
						<Button type="primary" onClick={loginHandle}>
							登 录
						</Button>
					</Card.Body>
					<Card.Footer extra={<a>忘记密码</a>} />
				</Card>
			</WingBlank>
		</div>
	);
};

export default LoginPage;
