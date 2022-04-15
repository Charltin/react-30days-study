import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [
				"说那年烟雨空蒙",
				"杏花船摇摆而过",
				"过谁家楼台一声弦歌拂过",
				"她素白衣着 山水间几程远游",
				"堪折 何折 年年柳色",
			],
		};
	}
	render() {
		return (
			<div>
				<h2>杏花弦外雨</h2>
				<ul>
					{this.state.movies.map((item, index) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
				<button
					onClick={() => {
						this.insertMovie();
					}}
				>
					添加电影
				</button>
			</div>
		);
	}

	insertMovie() {
		// 在最后添加，有没有key都可以
		// this.setState({
		//   movies:[...this.state.movies, "后来事不知如何"]
		// })

		// 在最前添加，有key会大大提高性能
		this.setState({
			movies: [
				"当一阵阵临窗雨",
				"洗旧那时心绪",
				"曲终人远隔千里万里",
				...this.state.movies,
			],
		});
	}
}

export default App;
