import React, { Component } from "react";
import PropTypes from "prop-types";


/**
 * Cpn1
 * @param {*} props 
 * @returns 
 */

function ChildCpn(props) {
	const { name, names } = props;

	return (
		<div>
			<h2>ChildCpn</h2>
			<h3>name:{name}</h3>
			<ul>
				{names.map((item, index) => {
					return <li>{index + " " + item}</li>;
				})}
			</ul>
		</div>
	);
}

// 属性验证 - 1 适用于函数组件和类组件
ChildCpn.propTypes = {
	name: PropTypes.string.isRequired,
	names: PropTypes.array,
};

// 如果没有传值就给一个默认值，这样的话即使有 isRequired 也不会 warning 了
ChildCpn.defaultProps = {
	name: "Lce",
};


/**
 * Cpn2 - 属性验证 - 2 只适用于类组件
 */
class ChildCpn2 extends Component {

	// ES6 的 class fields 写法（必须要static
	static propTypes = {
		name: PropTypes.number,
	};

	static defaultProps = {
		name: 456,
	};

	render() {
		const { name } = this.props;

		return <div>{name}</div>;
	}
}


/**
 * App
 */
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "于贞",
			names: ["我", "用", "四", "季", "来", "等", "你"],
		};
	}

	render() {
		const { name, names } = this.state;
		return (
			<div>
				<ChildCpn name={name} names={names} />
				{/* 这里的 name 没有传就会报一个 warning ，因为 name 给了一个 name: PropTypes.string.isRequired */}
				<ChildCpn names={names} />
				<hr />
				<ChildCpn2 name={"123"} />
				<ChildCpn2 />
			</div>
		);
	}
}

export default App;
