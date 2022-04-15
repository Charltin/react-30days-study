import React, { PureComponent } from "react";

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			friends: [
				{ id: 1, name: "喻言", age: 18 },
				{ id: 2, name: "金晨", age: 20 },
				{ id: 3, name: "贺峻霖", age: 17 },
			],
		};
	}

	// shouldComponentUpdate(newProps, newState) {
	// 	if (newState.friends !== this.state.friends) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	render() {
		return (
			<div>
				<h2>墙头列表</h2>
				<ul>
					{this.state.friends.map((item, index) => {
						return (
							<li key={item.id}>
								姓名：{item.name + " "}
								年龄：{item.age + " "}
								<button onClick={() => this.incrementAge(index)}>
									年龄 +1
								</button>
							</li>
						);
					})}
				</ul>
				<button onClick={() => this.insertData()}>添加数据</button>
			</div>
		);
	}

	// 不推荐的写法（不可以的写法
	// insertData() {
	// 	const newData = { id: 5, name: "蒋芸", age: 22 }; // new一下
	// 	const newFriends = this.state.friends;
	// 	newFriends.push(newData); // 直接push 直接给
	// 	this.setState({
	// 		friends: newFriends,
	// 	});
	// }

	// 推荐的写法（正确的写法
	insertData() {
		const newData = [
			{ id: 4, name: "王晓佳", age: 22 },
			{ id: 5, name: "蒋芸", age: 22 },
		];
		const newFriends = [...this.state.friends].concat(newData);

		this.setState({
			friends: newFriends,
		});
	}

	incrementAge(index) {
		const newFriends = [...this.state.friends];
		newFriends[index].age += 1;
		this.setState({
			friends: newFriends,
		});
	}
}
