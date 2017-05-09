import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super(props)
    this.state ={
      number: 0
    }
  }
  onAdd = () => {
  this.setState({number: this.state.number + 1})
  }
onRemove = () =>  {
    this.setState({number: this.state.number - 1})
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


        </div>
        <button onClick={this.onAdd}>click to add 1</button>
        <button onClick={this.onRemove}> click to remove by 1</button>
        {this.state.number}

      </div>
    );
  }
}

export default App;
