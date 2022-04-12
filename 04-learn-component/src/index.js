import React from "react";
import { createRoot } from 'react-dom/client'

// -------- 01 ---------
// import App from "./01-组件的定义方式/01-组件的定义";
// import App from "./01-组件的定义方式/02-render的返回值";

// -------- 02 ---------
import App from "./02-组件的生命周期/App";

createRoot(document.getElementById("root")).render(	<div>
	<App />
</div>,)

