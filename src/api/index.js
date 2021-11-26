/*
 * @Description: 接口列表
 * @Author: Gleason
 * @Date: 2021-09-27 11:21:02
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-26 18:03:53
 */

import dio from "./service";
/**
 * 登录
 */
export const login = (param) => dio.post("getTime", param);

/**
 * 随机一句名言
 */
export const vote = (param) => dio.get("sentences", param);
