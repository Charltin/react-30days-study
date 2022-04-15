import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "coderwhy",
		};
	}

	render() {
		return (
			<div>
				<h2>{this.state.message}</h2>
				<button onClick={(e) => this.change()}>change</button>
				<button id="btn">change2</button>
			</div>
		);
	}

	componentDidMount() {
		document.getElementById("btn").addEventListener("click", () => {
			this.setState({
				message: 456,
			});
			console.log(this.state.message);
		});
	}

	change() {
		setTimeout(() => {
			this.setState({
				message: 456,
			});
			console.log(this.state.message);
		}, 0);
	}
}


