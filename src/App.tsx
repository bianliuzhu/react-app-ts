/*
 * @Author: Gleason
 * @Date: 2021-09-14 16:18:32
 * @LastEditTime: 2021-10-29 14:30:40
 * @Description:
 */

import { login, vote } from "api";

export default function App() {
	// const aaa = useSelector((state: any) => state.counter);

	const loginHandle = async () => {
		const res = await login({
			code: "079S6nFa1nz31C0gEjHa11Q6A40S6nFx",
			"user-info": JSON.stringify({
				nickName: "卞刘著",
				gender: 0,
				language: "zh_CN",
				city: "",
				province: "",
				country: "",
				avatarUrl:
					"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKd0LPDu217v67zib3C8HZCS79YqnE7phVic73mwYvlpiazwsLS3rdxgCsqalfy3Uaicia8CNu2GJeWDVg/132",
			}),
		});
		console.log(res);
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
