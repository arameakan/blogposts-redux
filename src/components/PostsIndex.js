import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <p>List of posts</p>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostsIndex);
