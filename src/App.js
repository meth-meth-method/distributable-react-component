import React, { Component } from 'react';
import MyComponent from 'my-component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent initiallyVisible/>
      </div>
    );
  }
}

export default App;