import React from "react";
import { createRoot } from 'react-dom/client'

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
import App from "./03-组件间的通讯/05-子传父通讯-函数组件"


createRoot(document.getElementById("root")).render(	<div>
	<App />
</div>,)

