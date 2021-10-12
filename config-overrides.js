/*
 * @Author: Gleason
 * @Date: 2021-09-24 11:32:44
 * @LastEditTime: 2021-10-12 11:09:42
 * @Description: webpack 配置(覆盖)
 */

const path = require("path");
const {
  override, // 覆盖函数
  addWebpackAlias, // 别名配置
  addLessLoader, // less loader
  fixBabelImports, // babel 导入 引入antd-mobile
} = require("customize-cra");
function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl);
}

// const REACT_APP_URL = require("./src/api/Env");

// const {
//   REACT_APP_ENV, // 环境标识
// } = process.env;

// override
module.exports = {
  webpack: override(
    addWebpackAlias({
      "@": pathResolve("./src"),
      assets: pathResolve("./src/assets"),
      components: pathResolve("./src/components"),
      utils: pathResolve("./src/utils"),
      layout: pathResolve("./src/layout"),
      pages: pathResolve("./src/pages"),
      style: pathResolve("./src/assets/style"),
      reducer: pathResolve("./src/reducer"),
      store: pathResolve("./src/store"),
      action: pathResolve("./src/action"),
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        localIdentName: "[local]--[hash:base64:5]",
      },
    }),
    fixBabelImports("import", {
      libraryName: "antd-mobile",
      style: "css",
    }),
    (config) => {
      return config;
    }
  ),

  jest: (config) => {
    return config;
  },

  // devServer: (configFunction) => (proxy, allowedHost) => {
  //   proxy = {
  //     [REACT_APP_ENV]: {
  //       secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
  //       ws: false, // 是否启用websockets
  //       target: REACT_APP_URL, // 代理目标
  //       changeOrigin: true, // 覆盖主机头来源
  //       pathRewrite: {
  //         [`^/${REACT_APP_ENV}`]: "",
  //       },
  //     },
  //   };
  //   return configFunction(proxy, allowedHost);
  // },

  paths: (paths, env) => {
    return paths;
  },
};
