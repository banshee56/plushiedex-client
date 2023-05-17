import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import { deletePost, fetchPost, updatePost } from '../actions';
import IconBar from './iconbar';

export default function Post(props) {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditing, setEditing] = useState(false);
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

  // const renderContent = () => {
  //   if (isEditing) {
  //     return (
  //       <form className="column-container">
  //         <label htmlFor="name">
  //           Name:
  //           <input type="text" defaultValue={post.title} name="title" onChange={updateTitle} className="input" />
  //         </label>

  //         <label htmlFor="photo-url">
  //           Photo URL:
  //           <input type="text" defaultValue={post.coverUrl} name="coverURL" onChange={updateCover} className="input" />
  //         </label>

  //         <label htmlFor="tags">
  //           Tags:
  //           <input type="text" defaultValue={post.tags} name="tags" onChange={updateTags} className="input" />
  //         </label>

  //         Description:<br />
  //         <TextareaAutosize
  //           name="content"
  //           defaultValue={post.content}
  //           type="text"
  //           onChange={updateContent}
  //           className="input-content"
  //         />

  //       </form>

  //     );
  //   } else {
  //     const showCover = () => {
  //       if (post.coverUrl) {
  //         return <img src={post.coverUrl} className="cover-photo" alt="cover" />;
  //       }
  //       return null;
  //     };

  //     const showContent = () => {
  //       if (post.content) {
  //         return <ReactMarkdown className="post-text">{post.content}</ReactMarkdown>;
  //       }
  //       return null;
  //     };
  //     return (
  //       <div className="post-container">
  //         <h1>{post.title}</h1>
  //         {showCover()}
  //         {showContent()}
  //         {/* <img src={post.coverUrl} className="cover-photo" alt="cover" />
  //         <ReactMarkdown className="post-text">{post.content}</ReactMarkdown> */}
  //         <p className="tags">{post.tags}</p>
  //       </div>
  //     );
  //   }
  // };

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
        {showContent()}
        <p className="tags">{post.tags}</p>
      </div>

    </div>
  );
}
