import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchPosts } from '../actions';

export default function Posts(props) {
  const dispatch = useDispatch();
  const allPosts = useSelector((reduxState) => (reduxState.posts.all));

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchPosts());
    };
    fetch();
    // console.log(1);
    // console.log('useEffect');
    // dispatch(fetchPosts());
  }, []);

  if (!allPosts) {
    return <div>Loading...</div>;
  }
  console.log(allPosts);

  return (
    <div className="page-container">
      <h1>PlushieDex</h1>
      <h2>A PokeDex for plushies! List the plushies you&apos;ve caught and the ones you&apos;re still wanting.</h2>

      <div className="posts">
        { allPosts.map((post) => {
          // shows an image if a url is given, does not check for validity however
          const showCover = () => {
            if (post.coverUrl) {
              return <img src={post.coverUrl} width={200} alt="profile" />;
            }
            return null;
          };
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
                  {showCover()}
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
