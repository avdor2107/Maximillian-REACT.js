import React, { Component } from 'react';
import './App.css';


import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: 'krejzihamburger'
  }
  userNameChangedHandler = (event) => {
      this.setState({username: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <UserInput click={this.userNameChangedHandler} currentName={this.state.username}/>
        <UserOutput userName = {this.state.username}/>
      </div>
    );
  }
}

export default App;
