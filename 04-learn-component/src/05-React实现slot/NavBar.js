import React, { Component } from "react";

export default class NavBar extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="nav-bar">
				<div className="nav-left flex-center">{children[0]}</div>
				<div className="nav-center flex-center">{children[1]}</div>
				<div className="nav-right flex-center">{children[2]}</div>
			</div>
		);
	}
}
