
import React, { Component } from 'react';

import CommentForm from '../CommentForm';

import style from './style.css';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
        
        <CommentForm />
      </div>
    )
  }
}

export default CommentBox;
