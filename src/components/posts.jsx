import React, { useState } from 'react';
import Post from './post';

export default function Posts() {
  const [posts, setPosts] = useState({});

  return (
    <div>
      <h1>Posts</h1>
      <div className="posts-container">
        {Object.entries(posts).map(([i, post]) => {
          return (
            <Post key={i}
              id={i}
              post={post}
            />
          );
        })}
      </div>

    </div>
  );
}
