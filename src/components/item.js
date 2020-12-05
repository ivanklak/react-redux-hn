import React from "react";
import { connect } from "react-redux";

class Item extends React.Component {
  render() {
    return (
      <div>
        <a className="item-title" href="#"></a>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return state;
};

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
