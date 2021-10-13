/*
 * @Author: Gleason
 * @Date: 2021-10-12 11:11:27
 * @LastEditTime: 2021-10-13 13:50:55
 * @Description:
 */
const REACT_APP_URL = require("./api/Env");
const { REACT_APP_ENV } = process.env;

const { createProxyMiddleware } = require("http-proxy-middleware");
console.log("REACT_APP_URL", REACT_APP_URL);
module.exports = function (app) {
  app.use(
    createProxyMiddleware(REACT_APP_ENV, {
      target: REACT_APP_URL,
      pathRewrite: {
        [`^/${REACT_APP_ENV}`]: "",
      },
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: false, // 启用websocket
    })
  );
};
