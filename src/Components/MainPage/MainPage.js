import React, { Component } from 'react';
import Post from '../Post/Post';
import './MainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Post />
      </div>
    );
  }
};

export default MainPage;
