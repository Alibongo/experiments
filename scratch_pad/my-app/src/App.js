import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    isOn: true
  };
}
toggle = () => {
  // State = an object that you give initial values to in the constructor
  this.setState({isOn: !this.state.isOn})
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <MyComponent  name="🤔"/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        // button text is determined by the current value of the isOn property
        <button onClick={this.toggle}>
        {this.state.isOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default App;
