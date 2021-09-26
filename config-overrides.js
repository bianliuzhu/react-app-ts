/*
 * @Author: Gleason
 * @Date: 2021-09-24 11:32:44
 * @LastEditTime: 2021-09-26 10:53:29
 * @Description: webpack 配置(覆盖)
 */
const {
  override, // 覆盖函数
  addWebpackAlias, // 别名配置
  addLessLoader, // less loader
  fixBabelImports, // babel 导入 引入antd-mobile
} = require("customize-cra");
const path = require("path");
// override
module.exports = {
  webpack: override(
    addWebpackAlias({
      "@img": path.resolve(__dirname, "assets/components"),
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
      console.log(config);
      return config;
    }
  ),

  jest: (config) => {
    return config;
  },

  devServer: (configFunction) => (proxy, allowedHost) => {
    const config = configFunction(proxy, allowedHost);
    return config;
  },

  paths: (paths, env) => {
    return paths;
  },
};
