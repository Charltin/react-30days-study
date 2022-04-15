import React, { PureComponent, memo } from "react";

// Header
const MemoHeader = memo(function Header() {
	console.log("Header被调用");
	return (
		<div>
			<h2>Header</h2>
		</div>
	);
});

// Main
class Banner extends PureComponent {
	render() {
		console.log("Banner 的 render 函数被调用");
		return (
			<div>
				<h3>Main - Banner</h3>
			</div>
		);
	}
}

class ProductsList extends PureComponent {
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
		console.log("ProductsList 的 render 函数被调用");
		return (
			<div>
				<h3>Main - ProductsList</h3>
				<ul>
					{this.state.movies.map((item, index) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
				<button onClick={() => this.insertText()}>insertText</button>
			</div>
		);
	}
	insertText() {
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

class Main extends PureComponent {
	render() {
		console.log("Main 的 render 函数被调用");

		return (
			<div>
				<h2>Main</h2>
				<Banner />
				<ProductsList />
			</div>
		);
	}
}

// Footer
class Footer extends PureComponent {
	render() {
		console.log("Footer 的 render 函数被调用");

		return (
			<div>
				<h2>Footer</h2>
			</div>
		);
	}
}

// App
class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};
	}
	render() {
		console.log("App 的 render 函数被调用");

		return (
			<div>
				<MemoHeader />
				<Main />
				<h2>这里放一个计数器，当前是：{this.state.counter}</h2>
				<button onClick={() => this.increment()}>+1</button>
				<Footer />
			</div>
		);
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}
}

export default App;
