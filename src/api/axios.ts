/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-14 11:52:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-18 10:42:32
 */
import axios from "axios";
// const domain = require("./Env");

const {
  NODE_ENV, // 环境变量
	HOST_DEVICE, // 设备
	HOST_SERVICE, // 服务
	HOST_ORDER, // 订单
	HOST_UE, // UE
	HOST_OLDFORNEWSERVICE, // 以旧换新
	HOST_QUICKORDER, // 一键下单
	HOST_QUICKORDERQ2, // 一键下单二期
	HOST_WORKER, // 工人认证
	HOST_CHARGE, // 京工巧匠小程序-收费线上化
} = process.env;

// 域名 映射关系
const HostMap = new Map([
	["device", HOST_DEVICE],// 设备
	["service", HOST_SERVICE],// 服务
	["order", HOST_ORDER],// 订单
	["ue", HOST_UE],// UE
	["oldfornewservice", HOST_OLDFORNEWSERVICE],// 以旧换新
	["quickorder", HOST_QUICKORDER],// 一键下单
	["quickorderQ2", HOST_QUICKORDERQ2],// 一键下单二期
	["worker", HOST_WORKER],// 工人认证
	["charge", HOST_CHARGE],// 京工巧匠小程序-收费线上化
]);

// 是否为生产模式
const IS_PROD = NODE_ENV === "production";

// 路径名称
const pathname = window.location.pathname.split("/")[3] || "/";

// 开发环境: 代理标识
const PROXY_SYMBOL = pathname === "/" ? 'device': pathname;

// 生产环境: 正式域名
const HOST_URL = pathname === "/" ? HostMap.get('device') : HostMap.get(pathname);

// 基础URL
const baseurl = IS_PROD ? HOST_URL : PROXY_SYMBOL;


// 创建 axios 实例
const Dio: any = axios.create({
  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  baseURL: baseurl,

  // 定义统一的请求头部
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    // 'Content-Type': 'application/json'
  },

  // 配置请求超时时间
  timeout: 10000,
  // http 状态码判断
  validateStatus(status: number) {
    console.log("http状态码:", status);
    switch (status) {
      case 404:
        console.log("失去页面页");
        break;
      case 500:
        console.log("服务错误页");
        break;
      default:
        console.log("http码正常");
    }
    return status < 500;
  },
});

// 请求拦截
Dio.interceptors.request.use(
  (config: any) => {
    // 自定义 header，可添加项目 token
    // eslint-disable-next-line no-param-reassign
    config.headers.token = "token";
    return config;
  },
  (error: any) => {
    console.error(error);
  }
);

// 响应拦截
Dio.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    console.error(error);
  }
);

export default Dio;
