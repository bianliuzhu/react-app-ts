
const path = require('path');
const fs = require('fs');
const rootPath = require('app-root-path');
const fileExists = require('../../plop/file-exists');

module.exports = {
	description: '创建 Page', 													// 生成器说明
	prompts: [{
		type: 'input',  															// 接受类型，这里为接受终端输入
		name: 'PageName',															// 输入的内容赋给变量name
		default: 'unknown-page',											// 默认名称未知的页面名称
		message: '请输入页面名称:', 											 // 提示内容：输入控制器名称
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
			type: 'add',  																// 动作类型：新增
			path: '../src/page/{{PageName}}/index.tsx',		// 创建路径
			templateFile: 'template/index.tsx.hbs',				// 模板，将根据此模板内容生成新文件
			abortOnFail: true,															// 某个action失败停止执行所有action
		},
		{
			type: 'add',
			path: '../src/page/{{PageName}}/index.less',
			templateFile: 'template/index.less.hbs',
			abortOnFail: true
		},
		{
			type: 'add',
			path: '../src/page/{{PageName}}/index.d.ts',
			templateFile: 'template/index.d.ts.hbs',
			abortOnFail: true,
			skip: function ({ PageName }) {
				const routerObjStr = `	{
		path: '/${PageName}',
		exact: true,
		name: '${PageName}',
		component: loadable(import(/* webpackChunkName: '${PageName}' */ '@/page/${PageName}')),
		auth: [1],
	},
];
`
				const routerpath = rootPath + '/src/routes/index.ts'

				let JsonObjString = fs.readFileSync(routerpath, 'utf8');

				const result = JsonObjString.replace("];", routerObjStr)

				fs.writeFile(routerpath, result, 'utf-8', (err) => {
					if (err) {
						console.log('写入失败')
					} else {
						console.log('路由写入成功')
					}
				})
			}
		}
	]
}
