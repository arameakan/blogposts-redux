import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/style.css";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/posts/new" className="btn">
            New Posts
          </Link>
        </div>
        <p>List of posts</p>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostsIndex);
