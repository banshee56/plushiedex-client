import React from 'react';
import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=b_ireen';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
};

// action creators
export function fetchPosts() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchPost(id) { /* axios get */
  return async (dispatch) => {
    // get
    try {
      const result = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createPost(post, navigate) { /* axios post */
  // post
  const fields = {
    title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
  };
  return async (dispatch) => {
    try {
      axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(dispatch(fetchPosts()));
      navigate('/'); // navigate to Posts page
    } catch (error) {
      console.log(error);
    }
  };
}

export function updatePost(post, id) { /* axios put */
  const fields = {
    title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
  };

  return async (dispatch) => {
    try {
      // put
      const result = await axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, fields);
      dispatch({
        type: ActionTypes.UPDATE_POST,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deletePost(id, navigate) { /* axios delete */
  return async (dispatch) => {
    // delete
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(dispatch(fetchPosts()));
    navigate('/'); // navigate to Posts page
  };
}
