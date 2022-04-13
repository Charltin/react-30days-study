import React, { Component } from "react";

import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar>
					<img
						src="https://gw.alipayobjects.com/zos/bmw-prod/28eebf00-11cc-41bc-9c5f-3fdaabd7caeb.svg"
						alt="logo"
					/>
					<h2>title</h2>
					<span>User</span>
				</NavBar>
				<hr />
				<NavBar2
					leftSlot={
						<img
							src="https://gw.alipayobjects.com/zos/bmw-prod/28eebf00-11cc-41bc-9c5f-3fdaabd7caeb.svg"
							alt="logo"
						/>
					}
					centerSlot={<h2>title</h2>}
					rightSlot={<span>User</span>}
				/>
			</div>
		);
	}
}
