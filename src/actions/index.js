import React from 'react';
import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=yourfirstname_yourlastname';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

// action creators
// export function fetchPosts() { /* axios get */
//   return async (dispatch) => {
//     // get
//     const result = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
//     console.log(result.data);

//     dispatch({
//       type: ActionTypes.FETCH_POSTS,
//       payload: result.data,
//     });
//   };
// }

// trying this out in async await format
// export function fetchPosts() {
//   return async (dispatch) => {
//     console.log(2);
//     console.log('actionCreator');
//     try {
//       const response = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
//       console.log(response.data);
//       dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

export function fetchPosts() {
  return (dispatch) => {
    console.log(2);
    console.log('actionCreator');
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// // as react doesn't let you pass in an async function to useEffect so you have to wrap the fetch call like so
// useEffect(() => {
//   const fetch = async () => {
//     await dispatch(fetchPost(params.postID));
//     setLoadedState(true); // or some followup
//   };
//   fetch();
// }, []);

export function createPost(post, navigate) { /* axios post */
  console.log('hi');
  return async (dispatch) => {
    // post
    const fields = {
      title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
    };
    const result = await axios.post(`${ROOT_URL}/posts${API_KEY}`, fields);

    dispatch({
      type: ActionTypes.CREATE_POST,
      payload: result.data,
    });

    console.log('here');
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
    const result = await axios.post(`${ROOT_URL}/posts${API_KEY}`, fields);

    dispatch({
      type: ActionTypes.UPDATE_POST,
      payload: result.data,
    });
  };
}

export function fetchPost(id) { /* axios get */
  return async (dispatch) => {
    // get
    const result = await axios.get(`${ROOT_URL}/posts${API_KEY}/${id}`);

    dispatch({
      type: ActionTypes.FETCH_POST,
      payload: result.data,
    });
  };
}

export function deletePost(id, navigate) { /* axios delete */
  return async (dispatch) => {
    // delete
    const result = await axios.delete(`${ROOT_URL}/posts${API_KEY}/${id}`);

    dispatch({
      type: ActionTypes.DELETE_POST,
      payload: result.data,
    });

    // navigate to Posts page
    navigate('/');
  };
}
