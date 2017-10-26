import React, { Component } from 'react';
import './index.css';
import postData from './application-data';

const CommentSection = (props) => {


    let user = postData.filter(post => {
      return post.username === props.username;
    })[0];

        let comments = user.comments
let newUser=''
let newText=''

  const addComment = event => {
    console.log('adding Comment');

    let newComment = {
      username: newUser,
      text:newText
    }
    comments.push(newComment);

    this.user.comments.push(newComment)
  };
  const handleNewCommentUserInput = event => {
    //this.setState({ newUser: event.target.value });
  };
  const handleNewTextInput = event => {
    //this.setState({ newText: event.target.value });
  };

    return (
      <div>
        <ul>
          {comments.map((comment, i) => {
            return (
              <li key={i}>
                <p>
                  <span className="username">{comment.username}</span>
                  <span>&nbsp;{comment.text}</span>
                </p>
              </li>
            );
          })}
        </ul>
        <form onSubmit={addComment}>
          <input
            display="inline"
            type="text"
            onChange={handleNewCommentUserInput}
            placeholder="    User Name    "
            value={newUser}
          />
          <input
            display="block"
            type="text"
            onChange={handleNewTextInput}
            placeholder="    Add New Comment    "
            value={newText}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  
}
export default CommentSection