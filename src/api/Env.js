/*
 * @Author: Gleason
 * @Date: 2021-09-26 16:33:25
 * @LastEditTime: 2021-10-13 18:28:58
 * @Description: 环境域名文件
 */

// 开发环境
const DEV = {
  device: "//poetry.apiopen.top", //设备
  service: "//jstp-test-product.jd.com", //服务
  order: "//jstp-test-order.jd.com", //订单
  ue: "//jstp-test-ue.jd.com", //ue接口服务
  oldfornewservice: "//jstp-m-test.jd.com/device_recycle", //以旧换新接口
  quickorder: "//jstp-test-product.jd.com", // 一键下单接口域名和服务的一样
  quickorderQ2: "//jstp-test-product.jd.com", // 一键下单接口域名
  worker: "//jstp-test-device.jd.com", // 工人设备信息录入
  charge: "//jstp-m-test.jd.com/charge", // 京工巧匠小程序-收费线上化测试域名
};

// 测试环境
const TEST = {
  device: "//jstp-test-device.jd.com", //设备
  service: "//jstp-test-product.jd.com", //服务
  order: "//jstp-test-order.jd.com", //订单
  ue: "//jstp-test-ue.jd.com", //ue接口服务
  oldfornewservice: "//jstp-m-test.jd.com/device_recycle", //以旧换新接口
  quickorder: "//jstp-test-product.jd.com", // 一键下单接口域名和服务的一样
  quickorderQ2: "//jstp-test-product.jd.com", // 一键下单接口域名
  worker: "//jstp-test-device.jd.com", // 工人设备信息录入
  charge: "//jstp-m-test.jd.com/charge", // 京工巧匠小程序-收费线上化测试域名
};

module.exports = new Map([
  ["dev", DEV],
  ["test", TEST],
]);
