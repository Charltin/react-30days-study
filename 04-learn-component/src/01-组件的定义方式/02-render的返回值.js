import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      // <div>
      //   <h2>02-render的返回值</h2>
      // </div>
      [
        <h2>02-render的返回值</h2>,
        <div>return 一个数组</div>,
      ]
    );
  }
}

export default App;