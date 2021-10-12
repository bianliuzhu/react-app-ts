/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-14 11:52:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-12 11:04:53
 */
import axios from "axios";

const REACT_APP_URL = require("./Env");

const {
  NODE_ENV, // 环境变量
  REACT_APP_ENV, // 环境标识
} = process.env;

// 是否为生产模式
const IS_PROD = NODE_ENV === "production";

// 构造 REACT_APP_URL

const baseurl = IS_PROD ? REACT_APP_URL : REACT_APP_ENV;
console.log("baseurl", baseurl);
// 创建一个独立的axios实例
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
