import React, { Component } from "react";

// 1. 创建 context 对象
const UserContext = React.createContext({
	// default
	uname: "uanme",
	level: 0,
});

const ThemeContext = React.createContext({
	color: "pink",
});

// 函数组件的情况
function ProfileHeader() {
	return (
		<UserContext.Consumer>
			{/* 这里的 value 值就是下面 UserContext.Provider 的值 */}
			{(value) => {
				return (
					// 这里的 ThemeContext 可以嵌套在外面，也可以嵌套在里面
					<ThemeContext.Consumer>
						{(theme) => {
							return (
								<div>
									<h2 style={{ color: theme.color }}>
										Username: {value.uname}
									</h2>
									<h2>Level: {value.level}</h2>
									<h2>Color:{theme.color}</h2>
								</div>
							);
						}}
					</ThemeContext.Consumer>
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
					<ThemeContext.Provider value={{ color: "pink" }}>
						<Profile />
					</ThemeContext.Provider>
				</UserContext.Provider>
			</div>
		);
	}
}
