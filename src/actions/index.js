import axios from "axios";
import { NEW_STORIES, ITEM } from "./../redux/story-reducer";

const baseURL = "https://hacker-news.firebaseio.com/v0/";

export function fetchNewStories() {
  const request = axios.get(`${baseURL}newstories.json?print=pretty`).then(response => {
    const id = response.data[0];
    // debugger;
    return axios.get(`${baseURL}item/${id}.json?print=pretty`);
  });
  console.log("request", request);

  return {
    type: NEW_STORIES,
    payload: request
  };
}

export function fetchTopStories() {
  const request = axios.get(`${baseURL}topstories.json?print=pretty`).then(response => {
    const id = response.data[0];
    return axios.get(`${baseURL}item/${id}.json?print=pretty`);
  });
  console.log("request", request);

  return {
    type: NEW_STORIES,
    payload: request
  };
}

export function fetchItem(id) {
  const request = axios.get(`${baseURL}item/${id}.json?print=pretty`);

  return {
    type: ITEM,
    payload: request
  };
}
