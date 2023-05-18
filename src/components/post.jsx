import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchPost } from '../actions';
import IconBar from './iconbar';

export default function Post(props) {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((reduxState) => (reduxState.posts.current));

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchPost(postID));
    };
    fetch();
  }, []);

  if (!post) {
    return <div className="page-container">ID: {postID}</div>;
  }

  const showCover = () => {
    if (post.coverUrl) {
      return <img src={post.coverUrl} className="cover-photo" alt="cover" />;
    }
    return null;
  };

  const showContent = () => {
    if (post.content) {
      return <ReactMarkdown className="post-text">{post.content}</ReactMarkdown>;
    }
    return null;
  };

  return (
    <div className="page-container">
      <IconBar />
      <div className="post-container">
        <h1>{post.title}</h1>
        {showCover()}
        {console.log(post)}
        <div className="tags">{post.gender ? `Gender: ${post.gender}` : null}</div>
        <div className="tags">{post.height ? `Height: ${post.height}` : null}</div>
        <div className="tags">{post.weight ? `Weight: ${post.weight}` : null}</div>
        {showContent()}
        <p className="tags">{post.tags}</p>
      </div>

    </div>
  );
}
