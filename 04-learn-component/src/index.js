import React from "react";
import { createRoot } from "react-dom/client";

import "./04-组件通讯的案例/style.css";

// -------- 01 ---------
// import App from "./01-组件的定义方式/01-组件的定义";
// import App from "./01-组件的定义方式/02-render的返回值";

// -------- 02 ---------
// import App from "./02-组件的生命周期/App";

// -------- 03 --------
// import App from "./03-组件间的通讯/01-组件间的嵌套"

// 组件间通讯
// -------- 02 --------
// import App from "./03-组件间的通讯/02-父传子通讯-类组件"
// -------- 03 --------
// import App from "./03-组件间的通讯/03-父传子通讯-函数组件"
// -------- 04 --------
// import App from "./03-组件间的通讯/04-父传子通讯-属性验证"
// -------- 05 --------
// import App from "./03-组件间的通讯/05-子传父通讯-函数组件"

// 组件通讯案例
// import App from "./04-组件通讯的案例/App";

// React 实现 slot
// import App from './05-React实现slot/App'
// import "./05-React实现slot/style.css";

// 跨组件通讯
// -------- 01 -------
// import App from './06-跨组件的通讯/01-跨组件通讯-props'
// -------- 02 -------
// import App from './06-跨组件的通讯/02-跨组件通讯-context'
// -------- 03 -------
// import App from './06-跨组件的通讯/03-跨组件通讯-context函数组件'
// -------- 04 -------
// import App from './06-跨组件的通讯/04-跨组件通讯-多个context'

// setState 的使用
// -------- 01 -------
import App from './07-setState的使用/01-为什么使用setState'

createRoot(document.getElementById("root")).render(
	<div>
		<App />
	</div>
);
