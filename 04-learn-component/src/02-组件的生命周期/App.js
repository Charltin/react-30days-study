import React, { Component } from "react";

class Cpn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 1,
		};
	}

	render() {
		return (
			<div>
				<h2>我是 Cpn 组件</h2>
			</div>
		);
	}

  componentWillUnmount() {
		console.log("调用了 Cpn 的 componentWillUnmount 方法");
	}
}

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			isShow: true,
		};

		console.log("执行了组件的 constructor");
    
	}

	render() {
		console.log("执行了组件的 render 方法");
		return (
			<div>
				我是 App 组件
				<h2>当前数据是：{this.state.counter}</h2>
				<button onClick={() => this.changeOneNum(1)}>+1</button>
				<button onClick={() => this.changeOneNum(-1)}>-1</button>
				<hr />
				<button onClick={() => this.changeCpnShow()}>切换显示 Cpn</button>
				{this.state.isShow && <Cpn />}
			</div>
		);
	}

	componentDidMount() {
		console.log("执行了组件的 componentDidMount 方法");
	}

	componentDidUpdate() {
		console.log("执行了组件的 componentDidUpdate 方法");
	}

	changeOneNum(type) {
		this.setState({
			counter: this.state.counter + type,
		});
		console.log("每次setState都会重新render");
	}

	changeCpnShow() {
		this.setState({
			isShow: !this.state.isShow,
		});
	}
}
