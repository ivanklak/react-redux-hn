import { combineReducers } from "redux";
import storyReduser from "./story-reducer";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  stories: storyReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // - в createStore созадется state со свойствами, кот выше

window.store = store;

export default store;
