/*
 * @Description: 首页组件
 * @Author: Gleason
 * @Date: 2021-11-01 18:16:55
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-17 14:38:38
 */
// import { useHistory } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
// import { login } from 'api';
import './index.less';

const HomePage = () => {
	// const history = useHistory();

	/**
	 * @description: 注释快捷键冲突
	 * @param {*}
	 * @return {*}
	 */
	// const Handle = async () => {
	// 	const res = login();
	// 	console.warn(res);
	// };

	// const goAboutPage = () => history.push('/about');

	/* return (
		<div>
			<h1>主页</h1> <br />
			<button onClick={Handle}>发起请求</button>
			<br />
			<button onClick={goAboutPage}>go about page</button>
			<br />
			<button onClick={() => history.push('/device')}>go device page</button>

		</div>
	); */

	return (
		<div className="home_container">
			<TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
				<TabBar.Item
					title="Life"
					key="Life"
					icon={
						<div
							style={{
								width: '22px',
								height: '22px',
								background:
									'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
							}}
						/>
					}
					selectedIcon={
						<div
							style={{
								width: '22px',
								height: '22px',
								background:
									'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
							}}
						/>
					}
					selected
					badge={1}
					onPress={() => {}}
					data-seed="logId"
				/>
				<TabBar.Item
					icon={
						<div
							style={{
								width: '22px',
								height: '22px',
								background:
									'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
							}}
						/>
					}
					selectedIcon={
						<div
							style={{
								width: '22px',
								height: '22px',
								background:
									'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
							}}
						/>
					}
					title="Koubei"
					key="Koubei"
					badge={'new'}
					onPress={() => {}}
					data-seed="logId1"
				/>
				<TabBar.Item
					icon={
						<div
							style={{
								width: '22px',
								height: '22px',
								background:
									'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
							}}
						/>
					}
					selectedIcon={
						<div
							style={{
								width: '22px',
								height: '22px',
								background:
									'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
							}}
						/>
					}
					title="Friend"
					key="Friend"
				/>
				<TabBar.Item
					icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
					selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
					title="My"
					key="my"
				/>
			</TabBar>
		</div>
	);
};

export default HomePage;
