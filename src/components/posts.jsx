import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './post';

export default function Posts() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-expressions
  const allPosts = useSelector((reduxState) => { reduxState.posts.all; });

  useEffect(() => {
    console.log(1);
    console.log('useEffect');

    const fetchAll = async () => {
      const res = await dispatch(fetchPosts());
      setLoaded(true);
      console.log('received results');
      console.log(res);
    };

    fetchAll();
  }, []);

  return (
    <div>
      {console.log(4)}
      {console.log('posts')}
      {console.log(allPosts)}
      { loaded ? console.log('did load') : console.log('did not load')}
      {/* { posts ? posts.all.map((post) => { return <div>{post.title}</div>; }) : null} */}
    </div>
  );

  // return (
  //   <div className="page-container">
  //     <h1 className="app-name">PlushieDex</h1>

  //     <div className="posts-container" />
  //     {/* {Object.entries(posts).map((post) => {
  //       console.log(post);
  //       return (
  //         <h1>{post.title}</h1>
  //       );
  //     })} */}

  //   </div>
  // );
}
