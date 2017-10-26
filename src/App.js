import React, { Component } from 'react';
import './App.css';
import PostContainer from './PostContainer';
import SearchBar from './SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: 'philzcoffee'
    }
  }
  setUserName = (username) => {
    this.setState({
      username
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar setUserName={this.setUserName} />
        <PostContainer username={this.state.username} />
      </div>
    );
  }
}

export default App;
