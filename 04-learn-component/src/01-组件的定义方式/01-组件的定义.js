import React from "react";

// export default class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			msg: "我是类组件：App",
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>{this.state.msg}</h2>
// 			</div>
// 		);
// 	}
// }

export default function App() {
	return (
		<div>
			<h2>01-组件的定义</h2>
			<h2>我是 function 组件：App</h2>
		</div>
	);
}
