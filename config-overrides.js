/*
 * @Author: Gleason
 * @Date: 2021-09-24 11:32:44
 * @LastEditTime: 2021-10-13 17:57:04
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

const domain = require("./src/api/Env");

const {
  REACT_APP_ENV, // 环境标识
} = process.env;

const HOST = domain.get(REACT_APP_ENV);

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
  // worker
  // charge
  devServer: (configFunction) => (proxy, allowedHost) => {
    proxy = {
      "/device": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.device, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/device": "",
        },
      },
      "/service": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.service, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/service": "",
        },
      },
      "/order": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.order, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/service": "",
        },
      },
      "/ue": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.ue, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/ue": "",
        },
      },
      "/oldfornewservice": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.oldfornewservice, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/oldfornewservice": "",
        },
      },
      "/quickorder": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.quickorder, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/quickorder": "",
        },
      },
      "/quickorderQ2": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.quickorderQ2, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/quickorderQ2": "",
        },
      },
      "/worker": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.worker, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/worker": "",
        },
      },
      "/charge": {
        secure: false, // 使用的是 http 协议则设置为false，https 协议则设置为 true
        ws: false, // 是否启用websockets
        target: HOST.charge, // 代理目标
        changeOrigin: true, // 覆盖主机头来源
        pathRewrite: {
          "^/charge": "",
        },
      },
    };
    return configFunction(proxy, allowedHost);
  },

  paths: (paths, env) => {
    return paths;
  },
};
