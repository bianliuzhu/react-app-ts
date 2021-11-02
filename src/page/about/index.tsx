/*
 * @Description: 404 页面
 * @Author: Gleason
 * @Date: 2021-11-01 11:29:54
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-02 16:35:27
 */
import { login } from "api";
import { useHistory } from "react-router-dom";

const AboutPage = () => {
	const history = useHistory();
	const Handle = async () => {
		const res = login();
		console.log(res);
	};
	const goAboutPage = () => {
		history.push("/index");
	};
	return (
		<div>
			<h1>关于页面</h1> <br />
			<button onClick={Handle}>发起请求</button>
			<button onClick={goAboutPage}>go home page</button>
		</div>
	);
};

export default AboutPage;
