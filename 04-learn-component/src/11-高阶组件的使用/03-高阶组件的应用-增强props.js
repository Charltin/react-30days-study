import React, { PureComponent, createContext } from "react";

// 定义一个高阶组件
function withUser(WrappedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WrappedComponent {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

// 创建一个 Context
const UserContext = createContext({
  nickname: "default",
  level: -1,
  region: "Unknown",
});

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home: <br />
        {`name: ${this.props.nickname}`}
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
        About: <br />
        {`name: ${this.props.nickname}`}
        <br />
        {`level: ${this.props.level}`}
        <br />
        {`region: ${this.props.region}`}
      </h2>
    );
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);
class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider
          value={{ nickname: "Lce", level: 99, region: "China" }}
        >
          <UserHome />
          <UserAbout />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
