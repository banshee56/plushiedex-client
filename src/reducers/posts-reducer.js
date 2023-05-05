import React, { useState } from 'react';
import { produce } from 'immer';
import { ActionTypes } from '../actions';

// const PostsReducer = (initialState = { all: [], current: {} }, action = {}) => {
//   // setState(
//   //   produce((draft) => {
//   //     // eslint-disable-next-line no-param-reassign
//   //     draft = [...state.all, action.payload];
//   //   }),
//   // );
//   const state = initialState;
//   console.log(state);
//   state.all = produce(initialState, (draft) => {
//     // eslint-disable-next-line no-param-reassign
//     // return action.payload;
//     [].concat(state, action.payload);
//   });
//   console.log(state);

//   switch (action.type) {
//     case ActionTypes.FETCH_POSTS:
//       console.log('sending');
//       console.log(state);
//       return state;
//     case ActionTypes.FETCH_POST:
//       return state.current;
//     default:
//       return state;
//   }
// };

// eslint-disable-next-line default-param-last
const PostsReducer = (state = { all: [], current: {} }, action) => produce(state, (draft) => {
  console.log(3);
  console.log('reducer');
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      // eslint-disable-next-line no-param-reassign
      // draft.all = action.payload;
      console.log('sending');
      console.log(draft.all);
      return state;
    case ActionTypes.FETCH_POST:
      return state.current;
    default:
      return state;
  }
});

export default PostsReducer;
