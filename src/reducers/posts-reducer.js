/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const PostsReducer = produce((draftState, action = {}) => {
  console.log(3);
  console.log('reducer');
  // console.log(action.payload);
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      draftState.all = action.payload;
      break;

    case ActionTypes.FETCH_POST:
      draftState.current = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default PostsReducer;
