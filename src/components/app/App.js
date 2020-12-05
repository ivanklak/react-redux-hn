import React from "react";
import "./App.css";
import {Link} from "react-router-dom";

const App = props => {
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/">New Stories</Link>
        <Link to="topstories"> Top Stories</Link>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
export default App;
