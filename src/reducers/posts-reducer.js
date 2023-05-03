import React, { useState } from 'react';
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const PostsReducer = (state = { all: [], current: {} }, action = {}) => {
  // const [state, setState] = useState(initialState);
  // setState(
  //   produce((draft) => {
  //     // eslint-disable-next-line no-param-reassign
  //     draft = [...draft, action.payload];
  //   }),
  // );
  // console.log(action);

  // const state = produce(initialState, (draftState) => {
  //   draftState
  // });

  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return state.all;
    case ActionTypes.FETCH_POST:
      return state.current;
    default:
      return state;
  }
};

export default PostsReducer;
