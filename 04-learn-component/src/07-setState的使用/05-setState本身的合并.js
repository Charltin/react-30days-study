import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};
	}

	render() {
		return (
			<div>
				<h2>{this.state.counter}</h2>
				<button onClick={() => this.change()}>+1</button>
			</div>
		);
	}

	// change() {
	// 	this.setState({
	// 		counter: this.state.counter + 1,
	// 	});
	// 	this.setState({
	// 		counter: this.state.counter + 1,
	// 	});
	// 	this.setState({
	// 		counter: this.state.counter + 1,
	// 	});
	// 	this.setState({
	// 		counter: this.state.counter + 1,
	// 	});
	// }

	change() {
		// 这种方法可以一次 +3
		this.setState((prevState, props) => {
			return {
				counter: prevState.counter + 1,
			};
		});
		this.setState((prevState, props) => {
			return {
				counter: prevState.counter + 1,
			};
		});
		this.setState((prevState, props) => {
			return {
				counter: prevState.counter + 1,
			};
		});
	}
}
export default App;
