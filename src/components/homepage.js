import React from "react";
import { connect } from "react-redux";

class HomePage extends React.Component {
  render() {
    return <div className="links">Hacker News</div>;
  }
}

let mapStateToProps = state => {
  return state;
};

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);