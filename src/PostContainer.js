import React, { Component } from 'react';
import CommentSection from './CommentSection';
import './index.css';
import postData from './DPostContainer';
export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    console.log('PostContainer constructor:', props.username)
    this.state = {
      comments: [],
      username: props.username,
      thumbnailUrl: '',
      imageUrl: '',
      likes: 0,
      timestamp: ''
    };
  }
  componentDidMount() {
    // console.log('PostContainer username:', this.state.username);
    let user = postData.filter(post => {
      return post.username === this.state.username;
    })[0];
    // console.log('PostContainer user comments:', user.comments);
    this.setState(
      {
        comments: user.comments,
        thumbnailUrl: user.thumbnailUrl,
        imageUrl: user.imageUrl,
        likes: user.likes,
        timestamp: user.timestamp
      },
      () => {
        // console.log('PostContainer state.comments:', this.state.comments);
        // console.log('PostContainer state.comments[0].text:', this.state.comments[0].text);
      }
    );
  }
  render() {
    //  console.log('PostContainer state:',this.state)
    return (
      <div>
        <p>{this.state.username}</p>
        <div>
          <span>likes:</span>
          <span>{this.state.likes}</span>
        </div>
        <p>{this.state.timestamp}</p>

        <img id="comment-image" src={this.state.imageUrl} alt="v5" />

        <CommentSection
          username={this.state.username}
        />
      </div>
    );
  }
}
