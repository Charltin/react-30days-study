import React, { Component } from "react";

// 1. 创建 context 对象
const UserContext = React.createContext({
	// default
	uname: "uanme",
	level: 0,
});

// 函数组件的情况
function ProfileHeader() {
	return (
		<UserContext.Consumer>
			{/* 这里的 value 值就是下面 UserContext.Provider 的值 */}
			{(value) => {
				return (
					<div>
						<h2>Username: {value.uname}</h2>
						<h2>Level: {value.level}</h2>
					</div>
				);
			}}
		</UserContext.Consumer>
	);
}

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
			uname: "查良镛",
			level: 999,
		};
	}

	render() {
		return (
			<div>
				<UserContext.Provider value={this.state}>
					<Profile />
				</UserContext.Provider>
			</div>
		);
	}
}
