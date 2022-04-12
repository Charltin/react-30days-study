import React, { Component } from "react";

// Header
class Header extends Component {
	render() {
		return (
			<div>
				<h2>Header</h2>
			</div>
		);
	}
}

// Main
class Banner extends Component {
	render() {
		return (
			<div>
				<h3>Main - Banner</h3>
			</div>
		);
	}
}

class ProductsList extends Component {
	render() {
		return (
			<div>
				<h3>Main - ProductsList</h3>
        <ul>
          <li>商品列表1</li>
          <li>商品列表2</li>
          <li>商品列表3</li>
          <li>商品列表4</li>
          <li>商品列表5</li>
        </ul>
			</div>
		);
	}
}

class Main extends Component {
	render() {
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
class Footer extends Component {
	render() {
		return (
			<div>
				<h2>Footer</h2>
			</div>
		);
	}
}

// App
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
