import React, { Component } from 'react';
import './index.css';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      searchText: '',
      postData: props.postData
    };
    this.setUserName = props.setUserName;
  }
  componentDidMount() {
    const names = this.state.postData.reduce((names, o) => {
      names.push(o.username);
      //   names.concat(names.comments.map(comment => {
      //       return comment.username
      //  }));
      return names;
    }, []);
    // console.log('names:', names)
    this.setState({
      names
    });
  }
  matches = () => {
    if (!this.state.searchText.length) {
        return []
    }
    let re = new RegExp(this.state.searchText);
    let matching = this.state.names.filter(name => {
      return name.search(re) >= 0;
    });
    return matching.map(name => {
      return (
        <li key={name} onClick={() => this.setUserName(name)}>
          {name}
        </li>
      );
    });
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
        {this.matches()}
      </div>
    );
  }
}
