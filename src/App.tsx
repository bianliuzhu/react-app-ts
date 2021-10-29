/*
 * @Author: Gleason
 * @Date: 2021-09-14 16:18:32
 * @LastEditTime: 2021-10-29 17:04:38
 * @Description:
 */

import { login, vote } from "api";

export default function App() {
	// const aaa = useSelector((state: any) => state.counter);

	const loginHandle = () => {
		setInterval(async () => {
			const res = await login({
				code: "32323423424324324242",
				"user-info": JSON.stringify({
					nickName: "qwerr",
					gender: 0,
					language: "zh_CN",
					city: "",
					province: "",
					country: "",
					avatarUrl: "qwerqwer",
				}),
			});
			console.log(res);
		}, 1000);
	};
	const voteHandle = async () => {
		const res = await vote({ type: 1, sign_id: 314848 });
		console.log(res);
	};

	return (
		<div>
			<button onClick={loginHandle}>登录</button>
			<button onClick={voteHandle}>投票</button>
		</div>
	);
}
