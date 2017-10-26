import React  from 'react';
import './index.css';
import AddComment from './AddComment'

const CommentSection = (props) => {

    let user = props.postData.filter(post => {
      return post.username === props.username;
    })[0];

        let comments = user.comments

  const newComment = (comment) => {
    console.log('adding Comment');
    user.comments.push(comment)
    // comments = user.comments
    props.addComment();
    //Component.forceUpdate();
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
        <AddComment newComment={newComment}/>
      </div>
    );
  
}
export default CommentSection