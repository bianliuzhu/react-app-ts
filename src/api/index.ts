/*
 * @Description: 接口列表
 * @Author: Gleason
 * @Date: 2021-09-27 11:21:02
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-12 00:16:34
 */

import dio from './service';

/**
 * 登录
 */
export const login = (param) => dio.post('getTime', param);

/**
 * 随机一句名言
 */
export const vote = (param) => dio.get('sentences', param);
