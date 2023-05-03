import { combineReducers } from '@reduxjs/toolkit';
import PostsReducer from './posts-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
