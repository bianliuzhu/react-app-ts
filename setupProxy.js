/*
 * @Author: Gleason
 * @Date: 2021-10-12 11:11:27
 * @LastEditTime: 2021-10-12 11:18:32
 * @Description:
 */
import { REACT_APP_URL } from "./src/api/Env";

const { REACT_APP_ENV } = process.env;

const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy([REACT_APP_ENV], {
      target: REACT_APP_URL,
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        [REACT_APP_ENV]: "",
      },
    })
  );
};
