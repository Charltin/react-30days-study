import React, { PureComponent } from "react";

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
		};
	}
	render() {
		return (
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<label htmlFor="username">
						用户：
						{/* 受控组件 */}
						<input
							type="text"
							id="username"
							onChange={(e) => this.handleChange(e)}
							value={this.state.username}
						/>
					</label>
					<input type="submit" value="提交" />
				</form>
			</div>
		);
	}

	handleSubmit(e) {
		// 取消默认行为
		e.preventDefault();
		console.log(this.state.username); // 点击提交btn就会在控制台打印出 value 数据
	}

	handleChange(e) {
		// console.log(e.target.value);
		this.setState({
			username: e.target.value,
		});
	}
}
