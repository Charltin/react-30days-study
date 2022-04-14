import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: "Hey",
		};
	}
	render() {
		return (
			<div>
				<h2>{this.state.msg}</h2>
				<button onClick={() => this.changeText()}>改变文本</button>
			</div>
		);
	}

	// 方式二：在 render 重新渲染后再获取 this.state.msg 就是更新后的值了
	componentDidUpdate() {
		console.log("componentDidUpdate " + this.state.msg);
	}

	changeText() {
		// 方法一：获取异步更新后的结果
		// setState (更新的state，回调函数)
		this.setState(
			{
				msg: "九三的耳朵不是特别好",
			},
			() => {
				console.log("回调函数 " + this.state.msg);
			}
		);
	}
}
