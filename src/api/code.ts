/*
 * @Author: Gleason
 * @Date: 2021-09-27 11:21:02
 * @LastEditTime: 2021-11-17 10:23:57
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
			console.warn('进入404页面');
			break;
		case 500:
			console.warn('服务错误');
			break;
		default:
			console.warn('服务错误');
			break;
	}
};

export default CodeHandle;
