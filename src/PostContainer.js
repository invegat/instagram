import React, { Component } from 'react';
import CommentSection from './CommentSection';
import './index.css';
import postData from './application-data';
export default class PostContainer extends Component {
  constructor(props) {
    super(props);
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
    console.log('PostContainer username:', this.state.username);
    let user = postData.filter(post => {
      return post.username === this.state.username;
    })[0];
    console.log('PostContainer user comments:', user.comments);
    this.setState({
      comments: user.comments,
      thumbnailUrl: user.thumbnailUrl,
      imageUrl: user.imageUrl,
      likes: user.likes,
      timestamp: user.timestamp
    });
  }
  render() {
    // console.log('PostContainer state:',this.state)
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
          comments={this.state.comments}
          username={this.state.username}
        />
      </div>
    );
  }
}
