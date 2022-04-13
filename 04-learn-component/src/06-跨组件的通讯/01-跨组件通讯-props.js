import React, { Component } from "react";

function ProfileHeader(props) {
	const { uname, level } = props;
	return (
		<div>
			<h2>Username: {uname}</h2>
			<h2>Level: {level}</h2>
		</div>
	);
}

function Profile(props) {
	// 函数里面是没有 this 的，所以不用写 this.props
	// const { uname, level } = props;

	return (
		<div>
			{/* <ProfileHeader uname={uname} level={level} /> */}
			<ProfileHeader {...props} />
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
			uname: "Yuyan",
			level: 99,
		};
	}
	render() {
		// const { uname, level } = this.state;

		return (
			<div>
				{/* <Profile uname={uname} level={level} /> */}
				<Profile {...this.state} />
			</div>
		);
	}
}
