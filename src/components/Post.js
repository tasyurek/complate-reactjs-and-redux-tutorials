import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  /*state = {
    post: null
  };

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;
    Axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        post: res.data
      });
    });
  }*/

  handleClick = e => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  handleGoBack = e => {
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);

    const post = this.props.post ? (
      <div className="card">
        <div className="card-content">
          <h4 className="card-title">{this.props.post.title}</h4>
          <div>{this.props.post.body}</div>
        </div>
        <div className="card-action">
          <button
            className="btn grey lighten-3 black-text"
            onClick={this.handleGoBack}
          >
            Back
          </button>
          <button
            className="btn red lighten-2 white-text right"
            onClick={this.handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    ) : (
      <div> Loading..</div>
    );

    return <div>{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => id === post.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
