/*
 * @Description: 登录页面
 * @Author: Gleason
 * @Date: 2021-11-01 14:06:28
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-05 14:22:00
 */
import { WingBlank, Card } from 'antd-mobile';
import './index.less';

const LoginPage = () => {
	return (
		<div className="login_container">
			<WingBlank size="md">
				<Card>
					<Card.Header
						title="登录"
						thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
					/>
					<Card.Body>sadfasdfa</Card.Body>
					<Card.Footer content="footer content" extra={<div>extra footer content</div>} />
				</Card>
			</WingBlank>
		</div>
	);
};

export default LoginPage;
