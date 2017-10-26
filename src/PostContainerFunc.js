import React, { Component } from 'react';
import CommentSection from './CommentSection';
import './index.css';
import postData from './application-data';
const PostContainer = props => {
  // console.log('PostContainer username:', this.state.username);
  let user = postData.filter(post => {
    return post.username === props.username;
  })[0];
  // console.log('PostContainer user comments:', user.comments);

  let comments = user.comments;
  let thumbnailUrl = user.thumbnailUrl;
  let imageUrl = user.imageUrl;
  let likes = user.likes;
  let timestamp = user.timestamp;

  //  console.log('PostContainer state:',this.state)
  return (
    <div>
      <p>{props.username}</p>
      <div>
        <span>likes:</span>
        <span>{likes}</span>
      </div>
      <p>{timestamp}</p>

      <img id="comment-image" src={imageUrl} alt="v5" />

      <CommentSection username={props.username} />
    </div>
  );
};
export default PostContainer;
