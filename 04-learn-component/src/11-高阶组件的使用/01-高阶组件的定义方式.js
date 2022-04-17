import React, { PureComponent } from "react";

class App extends PureComponent {
	render() {
		return <div>{this.props.name}</div>;
	}
}

// 给 App 定义一个 展示名称
App.displayName = "Lce";

function enhanceComponent(WrappedComponent) {
	class NewComponent extends PureComponent {
		render() {
			return <WrappedComponent {...this.props} />;
		}
	}
	NewComponent.displayName = "是我";
	return NewComponent;
}

const EnhanceComponent = enhanceComponent(App);

export default EnhanceComponent;
