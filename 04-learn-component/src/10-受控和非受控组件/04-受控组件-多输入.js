import React, { PureComponent } from "react";

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			valid: "",
		};
	}
	render() {
		return (
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div>
						<label htmlFor="username">
							用户：
							<input
								type="text"
								id="username"
								name="username"
								onChange={(e) => this.handleChange(e)}
								value={this.state.username}
							/>
						</label>
					</div>
					<div>
						<label htmlFor="password">
							密码：
							<input
								type="text"
								id="password"
								name="password"
								onChange={(e) => this.handleChange(e)}
								value={this.state.password}
							/>
						</label>
					</div>
					<div>
						<label htmlFor="valid">
							验证码：
							<input
								type="text"
								id="valid"
								name="valid"
								onChange={(e) => this.handleChange(e)}
								value={this.state.valid}
							/>
						</label>
					</div>
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
		this.setState({
			// 计算属性名
			[e.target.name]: e.target.value,
		});
	}
}
