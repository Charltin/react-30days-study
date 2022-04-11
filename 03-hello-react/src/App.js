import React, { Component } from "react";

export default class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			counter: 1,
		};
	}
	render() {
		return (
			<div>
				<h2>当前计数：{this.state.counter}</h2>
				<button onClick={() => this.change(1)}>+1</button>
				<button onClick={() => this.change(-1)}>-1</button>
			</div>
		);
	}

	change(type) {
		this.setState({
			counter: this.state.counter + type,
		});
	}
}
