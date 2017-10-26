import React, { Component } from 'react';
import postData from './application-data';
import './index.css';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      searchText: ''
    };
    this.setUserName = props.setUserName;
  }
  componentDidMount() {
    const names = postData.reduce((names, o) => {
      names.push(o.username);
      //   names.concat(names.comments.map(comment => {
      //       return comment.username
      //  }));
      return names;
    }, []);
    console.log('names:', names)
    this.setState({
      names
    });
  }
  matches = () => {
    let re = new RegExp(this.state.searchText);
    let matching = this.state.names.filter(name => {
      return name.search(re) >= 0;
    });
    return (
        matching.map(name => {
          return (
            <li key={name} onClick={() => this.setUserName(name)}>
              {name}
            </li>
          );
        })
    );
  };

  handleNewTextInput = event => {
    this.setState({ searchText: event.target.value });
  };
  render() {
    return (
      <div className="navbar">
        <input
          type="text"
          onChange={this.handleNewTextInput}
          value={this.state.searchText}
          id="seach"
          size="20"
        />
 
      </div>
    );
  }
}
