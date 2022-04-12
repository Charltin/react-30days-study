import React, { Component } from "react";

class ChildCpn extends Component {

  // 其实不写 rcons 也可以正常使用 props，因为这个是写在了父类里面
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// 	this.props = props;
	// }
  
	render() {
		const { song, singer, msg } = this.props;
		return (
			<div>
				<h2>ChildCpn</h2>
				<div>展示数据：{song + " - " + singer + " - " + msg}</div>
			</div>
		);
	}
}

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			song: ["人间自救指南", "飞奔向你"],
			singer: ["于贞", "于贞"],
			msg: ["救赎不为了救赎", "我用四季来等你"],
		};
	}
	render() {
		const { song, singer, msg } = this.state;
		return (
			<div>
				<ChildCpn song={song[0]} singer={singer[0]} msg={msg[0]} />
				<ChildCpn song={song[1]} singer={singer[1]} msg={msg[1]} />
			</div>
		);
	}
}
