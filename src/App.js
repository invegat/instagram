import React, { Component } from 'react';
import './App.css';
import PostContainer from './PostContainerFunc';
import SearchBar from './SearchBar';
import TestFunc from './TestFunc';
import PostData , {SetPostData} from './DApplication-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'philzcoffee',
      PostData: []
    };
  }
  componentDidMount() {
    // localStorage.clear();
    if (PostData.length === 0) {
      console.log('calling postData()')
      this.setState({
        PostData: PostData()
      });
    }
  }
  setUserName = username => {
    console.log('setting username:', username);
    this.setState(
      {
        username
      },
      () => {
        console.log('new username:', this.state.username);
        this.forceUpdate();
      }
    );
  };
  addComment = () => {
    SetPostData(this.state.postData);
    console.log('App addComment');
    let username = this.state.username;
    this.setUserName('x');
    this.setUserName(username);
  };
  render() {
    console.log('rendering:', this.state.username);
    return (
      <div className="App">
        <SearchBar
          setUserName={this.setUserName}
          postData={this.state.PostData}
        />
        <PostContainer
          username={this.state.username}
          addComment={this.addComment}
          postData={this.state.PostData}
        />
        <TestFunc username={this.state.username} />
      </div>
    );
  }
}

export default App;
