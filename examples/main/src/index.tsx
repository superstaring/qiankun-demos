import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
  initGlobalState,
} from "qiankun";

import render from "./ReactRender";

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = (loading: any) => render({ loading });

/**
 * Step2 注册子应用
 */

registerMicroApps([
  {
    name: "react16",
    entry: "//localhost:7100",
    container: "#subapp-viewport",
    loader,
    activeRule: "/react16",
  },
]);

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp("/react16");

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
