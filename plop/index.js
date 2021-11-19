/*
 * @Description: plop 生成器
 * @Author: Gleason
 * @Date: 2021-11-16 14:04:52
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-17 10:57:41
 */

const createPage = require('./generator/page')
module.exports = function (plop) {
	plop.setGenerator('createPage', createPage);
};
