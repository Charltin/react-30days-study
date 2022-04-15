import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			song: {
				singer: {
					id: "aLIEz",
					name: "茶理理",
				},
				languages: ["Chinese", "English", "German"],
			},
		};
	}
	render() {
		return (
			<div>
				<h2>{this.state.song.languages}</h2>
				<h2>{this.state.song.singer.id}</h2>
				<h2>{this.state.song.singer.name}</h2>
				<h2>{this.state.counter}</h2>
				<h2>{this.state.languages}</h2>
				<button onClick={() => this.change()}>+1</button>
			</div>
		);
	}
	change() {
		this.setState({
			counter: this.state.counter + 1,
			languages: "language", 
		});
	}
}
// 为什么 change 中的 setState 不会覆盖 cons 中的 state 的其他属性？
// 在源码中做了这样一件事：Object.assign({}, preState, newState)
// 这个方法是将 preState 和 newState 合并，放到 {} 中去，其中后面的 newState 会覆盖 preState 中的相同属性，以此来更新 state

export default App;
