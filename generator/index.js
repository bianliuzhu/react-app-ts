/*
 * @Description: plop 生成器
 * @Author: Gleason
 * @Date: 2021-11-16 14:04:52
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-17 10:57:41
 */
const fileExists = require('./file-exists');

module.exports = function (plop) {
	// 控制器生成器
	plop.setGenerator('controller', {
		description: '创建页面', 													// 生成器说明
		prompts: [{
			type: 'input',  															// 接受类型，这里为接受终端输入
			name: 'PageName',															// 输入的内容赋给变量name
			default: 'unknown-page',											// 默认名称未知的页面名称
			message: '请输入页面名称', 											 // 提示内容：输入控制器名称
			validate: value => {
				if (/.+/.test(value)) {
					return fileExists(value)
						? '已经存在相同的容器名或者组件名'
						: true;
				}
				return '组件名为必填';
			}
		}],
		actions: [
			{
				type: 'add',  															// 动作类型：新增
				path: '../src/page/{{PageName}}/index.tsx',		// 创建路径
				templateFile: 'template/index.tsx.hbs',		// 模板，将根据此模板内容生成新文件
			},
			{
				type: 'add',
				path: '../src/page/{{PageName}}/index.less',
				templateFile: 'template/index.less.hbs'
			},
			{
				type: 'add',
				path: '../src/page/{{PageName}}/index.d.ts',
				templateFile: 'template/index.d.ts.hbs'
			}
		]
	});
};
