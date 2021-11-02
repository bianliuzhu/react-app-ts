/*
 * @Description: 404 页面
 * @Author: Gleason
 * @Date: 2021-11-01 11:29:54
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-02 15:08:23
 */
import { login } from "api";

const AboutPage = () => {
	const Handle = async () => {
		const res = login();
		console.log(res);
	};
	return (
		<div>
			主页<button onClick={Handle}>点击</button>
		</div>
	);
};

export default AboutPage;
