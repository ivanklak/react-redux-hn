import axios from "axios";
import { NEW_STORIES, ITEM } from "./../redux/story-reducer";

const baseURL = "https://hacker-news.firebaseio.com/v0/";

function fetchNewStories() {
  const request = axios.get(`${baseURL}newstories.json`).then(response => {
    const id = response.data[0];
    return axios.get(`${baseURL}item/${id}.json`);
  });
  console.log("request", request);

  return {
    type: NEW_STORIES,
    payload: request
  };
}

export function fetchItem(id) {
  const request = axios.get(`${baseURL}item/${id}.json`);

  return {
    type: ITEM,
    payload: request
  };
}
