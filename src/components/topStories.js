import React from "react";
import { connect } from "react-redux";
import { fetchTopStories } from "./../actions/index";
import { NavLink } from "react-router-dom";

class TopStories extends React.Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }
  renderPosts() {
    if (!this.props.items.items) {
      return <div>loading</div>;
    } else {
      return (
        <NavLink to={`item/${this.props.items.items.id}`} className="link">
          <div>{this.props.items.items.title}</div>
          <div>{this.props.items.items.by}</div>
        </NavLink>
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

export default connect(mapStateToProps, { fetchTopStories })(TopStories);
