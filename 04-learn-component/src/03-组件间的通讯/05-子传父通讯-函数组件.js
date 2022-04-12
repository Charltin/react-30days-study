import React, { Component } from "react";

class CounterButton extends Component {
	render() {
		const { increment } = this.props;
		return <button onClick={increment}> CounterButton+1 </button>;
	}
}

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
				<h2>当前计数：{this.state.counter}</h2>
				<button onClick={() => this.increment()}> App+1 </button>
				<CounterButton increment={() => this.increment()} />
			</div>
		);
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}
}

export default App;
