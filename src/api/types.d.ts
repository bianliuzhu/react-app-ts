/*
 * @Description: 类型定义文件
 * @Author: Gleason
 * @Date: 2022-02-11 22:37:01
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-12 00:27:28
 */
declare interface Resonse {
	status: number; // `status` 来自服务器响应的 HTTP 状态码
	statusText: string; // `statusText` 来自服务器响应的 HTTP 状态信息
	headers: any; // `headers` 服务器响应的头
	config: any; // `config` 是为请求提供的配置信息
	request: any;
	data: any;
}

declare interface Ilist extends Resonse {}
