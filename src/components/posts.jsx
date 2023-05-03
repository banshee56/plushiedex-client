import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './post';

export default function Posts() {
  const [posts, setPosts] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAll = async () => {
      const res = await dispatch(fetchPosts());
      setPosts(res);
    };
    fetchAll();
  }, []);

  // useEffect(() => {
  //   const fetch = async () => {
  //     await dispatch(fetchPost(params.postID));
  //     setLoadedState(true); // or some followup
  //   };
  //   fetch();
  // }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="posts-container" />
      {/* {Object.entries(posts).map(([i, post]) => {
        return (
          <Post key={i}
            id={i}
            post={post}
          />
        );
      })} */}

    </div>
  );
}
