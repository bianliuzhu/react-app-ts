/*
 * @Author: Gleason
 * @Date: 2021-09-14 16:18:32
 * @LastEditTime: 2021-10-12 14:51:55
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { login } from "./api";
export default function App() {
  const loginHandle = async () => {
    const res = await login();
    console.log(res);
  };
  const handle_click = () => {
    fetch("/dev/org/all", { method: "GET" }).then(function (res) {
      console.log("res", res);

      // res.json().then(function (data) {
      //   console.log("data", data);
      // });
    });
  };
  return (
    <div>
      Hello React Router
      <button onClick={loginHandle}>登录</button>
      <button onClick={handle_click}>测试</button>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
