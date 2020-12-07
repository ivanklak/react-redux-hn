import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className="header">
      <NavLink to="/">New Stories</NavLink>
      <NavLink to="topstories"> Top Stories</NavLink>
    </header>
  );
};

export default Header;
