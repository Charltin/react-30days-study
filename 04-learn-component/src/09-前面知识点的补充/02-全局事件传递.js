import React, { PureComponent } from "react";
import { EventEmitter } from "events";

// 事件总线：event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
	componentDidMount() {
		eventBus.addListener("sayHello", this.handleSayHelloListener);
	}

	componentWillUnmount() {
		eventBus.removeListeners("sayHello", this.handleSayHelloListener);
	}

	handleSayHelloListener(...args) {
		console.log(...args);
	}

	render() {
		return <div>Home</div>;
	}
}

class Profile extends PureComponent {
	render() {
		return (
			<div>
				<h2>Profile</h2>
				<button onClick={(e) => this.emitEvent()}>Profile按钮</button>
			</div>
		);
	}

	emitEvent() {
		// emit 的第一个值是 sayHello，传过去的数值是 toMyEgo
		eventBus.emit("sayHello", "天马行空自由如风", "无拘束倔强得自我");
	}
}

export default class App extends PureComponent {
	render() {
		return (
			<div>
				<Home />
				<Profile />
			</div>
		);
	}
}
