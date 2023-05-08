/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchPosts } from '../actions';

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
  console.log(allPosts);

  return (
    <div className="page-container">
      <h1>PlushieDex</h1>
      <h2>Like a PokeDex but for plushies! List the plushies you&apos;ve caught and the ones you&apos;re still wanting.</h2>
      {console.log(4)}
      {console.log('posts')}
      {console.log(allPosts)}
      <div className="posts">
        { allPosts.map((post) => {
          return (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="post"
                >
                  <h1>{post.title}</h1>
                  <img src={post.coverUrl} width={200} />
                  <p>{post.tags}</p>
                </motion.div>
              </Link>
            </div>

          );
        }) }
      </div>

    </div>
  );
}
