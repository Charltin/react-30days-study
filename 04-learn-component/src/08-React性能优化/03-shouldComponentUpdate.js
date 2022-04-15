import React, { PureComponent } from "react";

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			msg: "杏花弦外雨",
		};
	}
	render() {
		console.log("App 的 render 函数被调用");
		return (
			<div>
				<h2>当前计数：{this.state.counter}</h2>
				<button onClick={() => this.increment()}>+1</button>
				<button onClick={() => this.changeText()}>changeText</button>
			</div>
		);
	}

	// shouldComponentUpdate(nextProps, newState) {
	// 	if (this.state.counter !== newState.counter) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	increment() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}

	changeText() {
		this.setState({
			msg: "曲中人远隔千里万里",
		});
	}
}
