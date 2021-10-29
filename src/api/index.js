/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-04-13 16:56:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-28 17:44:16
 */
import dio from "./dio";
/**
 * 登录
 */
export const login = (param) => dio.post("api/customer/login", param);
/**
 * 投票
 */
export const vote = (param) => dio.post("api/activity/vote", param);
