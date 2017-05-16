import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './List';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    value: '',
    items: [{text: "hello", isCompleted: false}]
  }
}
// change state value
onChange = (event) =>{
  console.log('event', event.target.value);
  this.setState({value: event.target.value});
}
// set display of items
handleSubmit = (event) => {
  event.preventDefault();
  this.setState({
    items: [...this.state.items, {text: this.state.value, checked: false}],
  value: ''
});
};
onChecked = text =>{
  this.setState({
    items: this.state.item.map( item => {
      if (text != item.text) return item;
      return{ text: item.text, checked: !item.checked };
    })
  });
};

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.onChange}/>
          <button>Add item</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              <List
                text={item.text}
                checked={item.checked}
                onChange={this.onChecked}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
