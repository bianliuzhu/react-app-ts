/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-13 16:56:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-12 14:55:24
 */
import dio from "./dio";
/**
 * 登录
 */
export const login = (param) => dio.get("/getTime", param);
