import { ActionTypes } from '../actions';

const PostsReducer = (state = { all: [], current: {} }, action = {}) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default PostsReducer;
