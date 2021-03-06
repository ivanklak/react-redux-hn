import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNewStories } from "./../actions/index";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchNewStories();
  }
  renderPosts() {
     //debugger;
    if (!this.props.items.items) {
      return <div>Loading...</div>;
    } else {
      return (
        <Link to={`item/${this.props.items.items.id}`} className="link">
          <div>{this.props.items.items.title}</div>
          <div>{this.props.items.items.by}</div>
        </Link>
      );
    }
  }
  render() {
    return <div className="links">{this.renderPosts()}</div>;
  }
}

let mapStateToProps = state => {
  return state;
};

// let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, { fetchNewStories })(HomePage);
