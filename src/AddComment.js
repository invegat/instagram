import React, { Component } from 'react';

export default class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newComment: props.newComment,
            newUser: '',
            newText: ''
        }
    }
    handleNewCommentUserInput = event => {
        this.setState({ newUser: event.target.value });
      };
    handleNewTextInput = event => {
        this.setState({ newText: event.target.value });
      };  
      addComment = event => {
        console.log('adding Comment');
        this.state.newComment({
          username: this.state.newUser,
          text:this.state.newText
        })
      };      
      render() {
          return (
            <form onSubmit={this.addComment}>
            <input
              display="inline"
              type="text"
              onChange={this.handleNewCommentUserInput}
              placeholder="    User Name    "
              value={this.state.newUser}
            />
            <input
              display="block"
              type="text"
              onChange={this.handleNewTextInput}
              placeholder="    Add New Comment    "
              value={this.state.newText}
            />
            <input type="submit" value="Post" />
          </form>              
          )
      }  
}