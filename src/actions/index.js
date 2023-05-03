import React from 'react';
import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=yourfirstname_yourlastname';

// async function getResponse() {
//   const response = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
//   console.log(response);
// }

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

// action creators
export function fetchPosts() { /* axios get */
  return async (dispatch) => {
    // get
    const getRes = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

    dispatch({
      type: ActionTypes.FETCH_POSTS,
      payload: getRes,
    });
  };
}

export function createPost(post, navigate) { /* axios post */
  return async (dispatch) => {
    // post
    const fields = {
      title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
    };
    const postRes = await axios.post(`${ROOT_URL}/posts${API_KEY}`, fields);

    dispatch({
      type: ActionTypes.FETCH_POSTS,
      payload: postRes,
    });

    // navigate to Posts page
    navigate('/');
  };
}

export function updatePost(post) { /* axios put */
  return async (dispatch) => {
    // put
    const fields = {
      title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
    };
    const putRes = await axios.post(`${ROOT_URL}/posts${API_KEY}`, fields);

    dispatch({
      type: ActionTypes.FETCH_POSTS,
      payload: putRes,
    });
  };
}

export function fetchPost(id) { /* axios get */
  return async (dispatch) => {
    // get
    const getRes = await axios.get(`${ROOT_URL}/posts${API_KEY}/${id}`);

    dispatch({
      type: ActionTypes.FETCH_POSTS,
      payload: getRes,
    });
  };
}

export function deletePost(id, navigate) { /* axios delete */
  return async (dispatch) => {
    // delete
    const getRes = await axios.delete(`${ROOT_URL}/posts${API_KEY}/${id}`);

    dispatch({
      type: ActionTypes.FETCH_POSTS,
      payload: getRes,
    });

    // navigate to Posts page
    navigate('/');
  };
}
