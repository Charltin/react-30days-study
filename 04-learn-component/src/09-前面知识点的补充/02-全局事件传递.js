import React, { PureComponent } from "react";
import { EventEmitter } from "events";

// 事件总线：event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
	componentDidMount() {
		eventBus.addListener("sayHello", this.handleSayHelloListener);
	}

	componentWillUnmount() {
		eventBus.removeAllListeners("sayHello", this.handleSayHelloListener);
	}

	handleSayHelloListener(args) {
		console.log(123);
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
		eventBus.emit("sayHello", "toMyEgo");
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
