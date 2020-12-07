import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../actions/index";

class Item extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.items.items.id);
  }
  render() {
      //debugger;
    if (!this.props.items.item) {
      return <div>loading...</div>;
    } else {
      console.log(this.props.items.item);
      return (
        <div>
          <a className="item-title" href={this.props.items.item.url}>
            {this.props.items.item.title}
          </a>
          <div className="test">
            <div>
              {this.props.items.item.score} Points by {this.props.items.item.by}
            </div>
            <div>Web</div>
          </div>
          <p>{this.props.items.item.text}</p>
        </div>
      );
    }
  }
}

let mapStateToProps = state => {
  return state;
};

// let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, { fetchItem })(Item);
