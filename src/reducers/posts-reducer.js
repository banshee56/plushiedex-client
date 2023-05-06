/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { produce } from 'immer';
import { ActionTypes } from '../actions';

// const PostsReducer = (initialState = { all: [], current: {} }, action = {}) => {
//   const state = initialState;
//   state.all = action.payload;
//   state.current = {};

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

// const PostsReducer = (state = { all: [], current: {} }, action) => {
//   console.log(3);
//   console.log('reducer');
//   switch (action.type) {
//     case ActionTypes.FETCH_POSTS:
//       console.log('sending');
//       return produce(state, (draftState) => {
//         draftState.all.push(action.payload);
//         console.log(draftState);
//       });

//     case ActionTypes.FETCH_POST:
//       return state.current;

//     default:
//       return state;
//   }
// };

const PostsReducer = (state = { all: [], current: {} }, action) => {
  console.log(3);
  console.log('reducer');
  console.log(state);
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      console.log('sending');
      return produce(state, (draftState) => {
        draftState.all.push({
          id: '123', title: 'nooo', tags: 'b', content: 'b',
        });
      });

    case ActionTypes.FETCH_POST:
      return state.current;

    default:
      return state;
  }
};

// const PostsReducer = produce((draft = { all: [], current: {} }, action) => {
//   console.log(3);
//   console.log('reducer');

//   switch (action.type) {
//     case ActionTypes.FETCH_POSTS:
//       draft.all.push(...action.payload);
//       return draft;

//     case ActionTypes.FETCH_POST:
//       return draft;

//     default:
//       return draft;
//   }
// });

export default PostsReducer;
