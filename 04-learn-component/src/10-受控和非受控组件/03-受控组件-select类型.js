import React, { PureComponent } from "react";

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			songs: "frame",
		};
	}
	render() {
		return (
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<select name="songs" onChange={(e) => this.handleChange(e)} value={this.state.songs}>
						<option value="meSuddenly">自我乍现</option>
						<option value="runToYou">飞奔向你</option>
						<option value="she">她和她和她</option>
						<option value="frame">成名</option>
						<option value="overWorldWar">冠世一战</option>
					</select>
					<input type="submit" value="提交" />
				</form>
			</div>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
    console.log(this.state.songs);
	}

	handleChange(e) {
    console.log(e);
		this.setState({
			songs: e.target.value,
		});
	}
}
