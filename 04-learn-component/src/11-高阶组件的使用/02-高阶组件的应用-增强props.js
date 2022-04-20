import React, { PureComponent } from "react";

// 定义一个高阶组件
function enhanceRegionProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="China" />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home: <br />
        {`name: ${this.props.nickName}`}
        <br />
        {`level: ${this.props.level}`}
        <br />
        {`region: ${this.props.region}`}
      </h2>
    );
  }
}
class About extends PureComponent {
  render() {
    return (
      <h2>
        Home: <br />
        {`name: ${this.props.nickName}`}
        <br />
        {`level: ${this.props.level}`}
        <br />
        {`region: ${this.props.region}`}
      </h2>
    );
  }
}
const EnhanceAbout = enhanceRegionProps(About);
const EnhanceHome = enhanceRegionProps(Home);
class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickName="Lce" level={99} />
        <EnhanceAbout nickName="Yan" level={99} />
      </div>
    );
  }
}

export default App;
