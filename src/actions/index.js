import React from 'react';
import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=b_ireen';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
};

// action creators
export function fetchPosts() {
  return async (dispatch) => {
    console.log(2);
    console.log('actionCreator');

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
    const result = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    dispatch({
      type: ActionTypes.FETCH_POST,
      payload: result.data,
    });
  };
}

export function createPost(post, navigate) { /* axios post */
  // post
  const fields = {
    title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
  };
  return async (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(dispatch(fetchPosts()));
    navigate('/'); // navigate to Posts page
  };
}

export function updatePost(post, id) { /* axios put */
  const fields = {
    title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
  };

  return async (dispatch) => {
    // put
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, fields).then(dispatch(fetchPost(id)));
  };
}

export function deletePost(id, navigate) { /* axios delete */
  return async (dispatch) => {
    // delete
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(dispatch(fetchPosts()));
    navigate('/'); // navigate to Posts page
  };
}
