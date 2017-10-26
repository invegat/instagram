import React, { Component } from 'react';
import './index.css'


export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map((comment, i) => {
            return (
            <li key={i}>
              <p>
                <span class="username">{comment.username}</span>
                <span>&nbsp;{comment.text}</span>
              </p>
            </li>);
          })}
        </ul>

      </div>
    );
  }
}
