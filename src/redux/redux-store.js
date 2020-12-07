import { combineReducers } from "redux";
import storyReduser from "./story-reducer";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';

const reducers = combineReducers({
  items: storyReduser
});

let store = createStore(reducers, applyMiddleware(promiseMiddleware)); // - в createStore созадется state со свойствами, кот выше

window.store = store;

export default store;
