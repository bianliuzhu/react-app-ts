/*
 * @Description: 接口列表
 * @Author: Gleason
 * @Date: 2021-09-27 11:21:02
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-02 14:53:02
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
