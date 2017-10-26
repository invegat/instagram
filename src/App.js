import React, { Component } from 'react';
import './App.css';
import PostContainer from './PostContainerFunc';
import SearchBar from './SearchBar'
import TestFunc from './TestFunc'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: 'philzcoffee'
    }
  }
  setUserName = (username) => {
    console.log('setting username:', username)
    this.setState({
       username
    }, () => {
      console.log('new username:',this.state.username)
      this.forceUpdate()
    })
   
  }
  render() {
    console.log('rendering:',this.state.username)
    return (
      <div className="App">
        <SearchBar setUserName={this.setUserName} />
        <PostContainer username={this.state.username} />
        <TestFunc username={this.state.username} />
      </div>
    );
  }
}

export default App;
