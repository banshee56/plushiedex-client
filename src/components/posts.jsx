/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './post';

export default function Posts(props) {
  const dispatch = useDispatch();
  const allPosts = useSelector((reduxState) => (reduxState.posts.all));

  useEffect(() => {
    console.log(1);
    console.log('useEffect');
    dispatch(fetchPosts());
  }, []);

  if (!allPosts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {console.log(4)}
      {console.log('posts')}
      {console.log(allPosts)}
      { allPosts.map((post) => { return <div>{post.title}</div>; }) }
    </div>
  );
}
