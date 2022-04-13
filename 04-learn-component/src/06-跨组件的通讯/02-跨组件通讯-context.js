import React, { Component } from "react";

// 1. 创建 context 对象
const UserContext = React.createContext({
	// default
	uname: "uanme",
	level: 0,
});

// 类组件的情况
class ProfileHeader extends Component {
	render() {
		const { uname, level } = this.context;
		return (
			<div>
				<h2>Username: {uname}</h2>
				<h2>Level: {level}</h2>
			</div>
		);
	}
}

// 在这里 通过把下面定义的 UserContext 给 ProfileHeader 的 contextType，实现数据的共享
ProfileHeader.contextType = UserContext;

function Profile(props) {
	return (
		<div>
			<ProfileHeader />
			<ul>
				<li>设置1</li>
				<li>设置2</li>
				<li>设置3</li>
				<li>设置4</li>
			</ul>
		</div>
	);
}

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			uname: "喻言",
			level: 10,
		};
	}

	render() {
		return (
			<div>
				{/* 这里 Profile 必须放在 UserContext 的里面，如果放在外面的话，显示的就会是上面定义的 default 值 */}
				<UserContext.Provider value={this.state}>
					<Profile />
				</UserContext.Provider>
			</div>
		);
	}
}
