/*
 * @Description: plop 生成器
 * @Author: Gleason
 * @Date: 2021-11-16 14:04:52
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-16 16:33:27
 */
module.exports = function (plop) {
  // 控制器生成器
  plop.setGenerator('controller', {
    description: '创建页面', // 生成器说明
    prompts: [{
      type: 'input',  // 接受类型，这里为接受终端输入
      name: 'PageName', // 输入的内容赋给变量name
      message: '请输入页面名称' // 提示内容：输入控制器名称
    }],
    actions: [
      {
        type: 'add',  // 动作类型：新增
        path: 'src/{{PageName}}/index.tsx', // 创建路径
        templateFile: 'templates/index.tsx.hbs' // 模板，将根据此模板内容生成新文件
      },
      {
        type: 'add',  // 动作类型：新增
        path: 'src/{{PageName}}/index.less', // 创建路径
        templateFile: 'templates/index.less.hbs' // 模板，将根据此模板内容生成新文件
      }
    ]
  });
};
