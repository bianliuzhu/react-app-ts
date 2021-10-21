/*
 * @Author: Gleason
 * @Date: 2021-09-27 11:21:02
 * @LastEditTime: 2021-10-21 15:13:16
 * @Description:
 */
// 业务接口状态码
interface Res {
	code: number;
	data: any;
	message: string;
}
const CodeHandle = (res: Res) => {
	const { code } = res;
	if (code === 200) return;
	switch (code) {
		case 404:
			console.log("进入404页面");
			break;
		case 500:
			console.log("服务错误");
			break;
		default:
			console.log("服务错误");
			break;
	}
};

export default CodeHandle;
