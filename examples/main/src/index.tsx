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
  addGlobalUncaughtErrorHandler,
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

const isDev = process.env.NODE_ENV === "development";

registerMicroApps([
  {
    name: "react16",
    entry: isDev ? "//localhost:7000/index.html" : "/react16App/index.html",
    container: "#subapp-viewport",
    loader,
    activeRule: "/react16",
  },
]);

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error(event);
  const { message: msg } = event as any;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    console.log("微应用加载失败，请检查应用是否可运行");
  }
});

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
