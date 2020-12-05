import React from "react";
import { Route } from "react-router";

import App from "./components/app/App";
import HomePage from "./components/homepage";
import Item from "./components/item";

export default (
  <Route path="/" component={App}>
    <Route path="/" component={HomePage} />
    {/* <Route path="item/:id" component={Item} /> */}
    <Route path="item/:id" render={() => <Item />} />
  </Route>
);
