/*
 * @Description: 404 页面
 * @Author: Gleason
 * @Date: 2021-11-01 11:29:54
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-02 13:41:38
 */
import { login } from "api";

const AboutPage = () => {
	const Handle = async () => {
		const res = login();
		console.log(res);
	};
	return (
		<div>
			关于 页面<button onClick={Handle}>点击</button>
		</div>
	);
};

export default AboutPage;
