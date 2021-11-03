/*
 * @Description: es lint 规则
 * @Author: Gleason
 * @Date: 2021-11-02 18:24:16
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-03 15:00:38
 */
module.exports = {
	extends: [
		'eslint-config-ali/typescript/react',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	rules: {
		'no-console': 0,
		'@typescript-eslint/member-ordering': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'no-param-reassign': 0,
	},
};
