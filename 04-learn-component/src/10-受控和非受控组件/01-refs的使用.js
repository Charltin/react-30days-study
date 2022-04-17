import React, { PureComponent, createRef } from "react";

class Counter extends PureComponent {
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
				<button onClick={(e) => this.increment()}> +1 </button>
			</div>
		);
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}
}

class App extends PureComponent {
	constructor(props) {
		super(props);

		this.titleRef = createRef(); // 创建一个 ref 对象
		this.titleEl = null;
		this.counterRef = createRef();
	}
	render() {
		return (
			<div>
				{/* <h2 ref=字符串/对象/函数>App</h2> */}
				{/* 传入一个字符串 */}
				<h2 ref="titleRef">百年的尺度匀给你游荡</h2>
				{/* 传入一个对象（React 推荐的方式） */}
				<h2 ref={this.titleRef}>你便是</h2>
				{/* 传入一个回调函数 */}
				<h2 ref={(arg) => (this.titleEl = arg)}>It's</h2>
				<button onClick={() => this.changeText()}>changeText</button>
				<hr />
				<Counter ref={this.counterRef} />
				<button onClick={(e) => this.appBtnClick()}>App中的按钮</button>
			</div>
		);
	}

	changeText() {
		// 使用方式一：字符串形式（不推荐，后续更新可能会删除）
		this.refs.titleRef.innerHTML = "别白来一趟 别活在过往 别空有梦想";
		// 使用方式二：对象方式
		this.titleRef.current.innerHTML = "星空烟火，神的堕落，山和云相依的执着";
		// 使用方式三：回调函数方式
		this.titleEl.innerHTML = "Quinn";
	}
	appBtnClick() {
		this.counterRef.current.increment();
		// console.log(this.counterRef.current);
	}
}

export default App;
