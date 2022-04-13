import React, { Component } from "react";

export default class NavBar2 extends Component {
	render() {
		const { leftSlot, centerSlot, rightSlot } = this.props;
		return (
			<div className="nav-bar">
				<div className="nav-left flex-center">{leftSlot}</div>
				<div className="nav-center flex-center">{centerSlot}</div>
				<div className="nav-right flex-center">{rightSlot}</div>
			</div>
		);
	}
}
