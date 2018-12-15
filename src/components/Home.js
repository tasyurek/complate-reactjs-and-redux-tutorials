import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <div>{post.body}</div>
            </div>
            <div className="card-action actions">
              <span>
                <i className="fas fa-thumbs-up blue-text text-darken-3 " />
              </span>
              <span>
                <i className="fas fa-heart red-text text-darken-1 " />
              </span>
              <span>
                <i className="fas fa-comment blue-text text-darken-3 " />
              </span>
            </div>
          </div>
        );
      })
    ) : (
      <div>There is no post</div>
    );
    return (
      <div>
        <h1>Home</h1>
        <div>{postList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
