import React from "react";
import { createRoot } from "react-dom/client";

// import "./04-组件通讯的案例/style.css";

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
// import App from './07-setState的使用/01-为什么使用setState'
// -------- 02 -------
// import App from './07-setState的使用/02-setState的异步更新'
// -------- 03 -------
// import App from './07-setState的使用/03-setState的同步更新'
// -------- 04 -------
// import App from './07-setState的使用/04-setState数据的合并'
// -------- 05 -------
// import App from './07-setState的使用/05-setState本身的合并'

// React 性能优化
// -------- 01 -------
// import App from './08-React性能优化/01-列表中keys的作用'
// -------- 02 -------
// import App from './08-React性能优化/02-组件嵌套的render调用'
// -------- 03 -------
// import App from "./08-React性能优化/03-shouldComponentUpdate";
// -------- 04 -------
// import App from "./08-React性能优化/04-PureComponent";
// -------- 04 -------
// import App from "./08-React性能优化/05-memo的使用";

// 前面知识点的补充
// -------- 01 --------
// import App from './09-前面知识点的补充/01-setState不可变的力量'
// -------- 02 --------
// import App from './09-前面知识点的补充/02-全局事件传递'

// 受控和非受控组件
// -------- 01 --------
// import App from './10-受控和非受控组件/01-refs的使用'
// -------- 02 --------
// import App from './10-受控和非受控组件/02-受控组件的基本使用'
// -------- 03 --------
// import App from './10-受控和非受控组件/03-受控组件-select类型'
// -------- 04 --------
// import App from "./10-受控和非受控组件/04-受控组件-多输入";
// -------- 04 --------
// import App from "./10-受控和非受控组件/05-非受控组件的使用";

// 高阶组件的使用
// -------- 01 --------
// import App from "./11-高阶组件的使用/01-高阶组件的定义方式";
// createRoot(document.getElementById("root")).render(
// 	<div>
// 		<App name="高阶组件的定义方式" />
// 	</div>
// );

// -------- 02 --------
// import App from "./11-高阶组件的使用/02-高阶组件的应用-增强props";
// -------- 02 --------
import App from "./11-高阶组件的使用/03-高阶组件的应用-增强props";

createRoot(document.getElementById("root")).render(
	<div>
		<App />
	</div>
);
