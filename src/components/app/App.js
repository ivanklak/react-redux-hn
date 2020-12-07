import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./../homepage";
import Item from "./../item";
import TopStories from "./../topStories";
import Header from "./Header";

const App = props => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{props.children}</div>
      <div className="app-wrapper-content">
        <Route path="/" render={() => <HomePage />} />
        <Route path="/topstories" render={() => <TopStories />} />
        <Route path="/item/:id" render={() => <Item />} />
      </div>
    </div>
  );
};
export default App;
