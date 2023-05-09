/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import { deletePost, fetchPost, updatePost } from '../actions';

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

  const updateTitle = (e) => {
    e.preventDefault();
    let newVal = e.target.value;
    if (!newVal) {
      newVal = ' ';
    }
    const fields = {
      title: newVal, content: post.content, coverUrl: post.coverURL, tags: post.tags,
    };
    dispatch(updatePost(fields, postID));
  };

  const updateContent = (e) => {
    let newVal = e.target.value;
    if (!newVal) {
      newVal = ' ';
    }

    const fields = {
      title: post.title, content: newVal, coverUrl: post.coverURL, tags: post.tags,
    };
    dispatch(updatePost(fields, postID));
  };

  const updateCover = (e) => {
    let newVal = e.target.value;
    if (!newVal) {
      newVal = ' ';
    }

    const fields = {
      title: post.title, content: post.content, coverUrl: newVal, tags: post.tags,
    };
    dispatch(updatePost(fields, postID));
  };

  const updateTags = (e) => {
    let newVal = e.target.value;
    if (!newVal) {
      newVal = ' ';
    }
    const fields = {
      title: post.title, content: post.content, coverUrl: post.coverUrl, tags: newVal,
    };
    dispatch(updatePost(fields, postID));
  };

  const handleEditClick = () => {
    setEditing(!isEditing);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <form className="column-container">
          <label htmlFor="name">
            Name:
            <input type="text" value={post.title} name="title" onChange={updateTitle} className="input" />
          </label>

          <label htmlFor="photo-url">
            Photo URL:
            <input type="text" value={post.coverUrl} name="coverURL" onChange={updateCover} className="input" />
          </label>

          <label htmlFor="tags">
            Tags:
            <input type="text" value={post.tags} name="tags" onChange={updateTags} className="input" />
          </label>

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          Description:<br />
          <TextareaAutosize
            name="content"
            value={post.content}
            type="text"
            onChange={updateContent}
            className="input-content"
          />

        </form>

      );
    } else {
      return (
        <div className="post-container">
          <h1>{post.title}</h1>
          <img src={post.coverUrl} className="cover-photo" />
          <ReactMarkdown className="post-text">{post.content}</ReactMarkdown>
          <p className="tags">{post.tags}</p>
        </div>
      );
    }
  };

  return (
    <div className="page-container">
      <div className="icon-bar">
        <motion.div
          transition={{ duration: 1 }}
          whileHover={
          { rotate: [0, 45, 0, -45, 0] }
          }
        >
          <NavLink to="/">
            <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#ffc700" className="post-icon" />
          </NavLink>
        </motion.div>
        <div>
          <Icon icon="material-symbols:edit" color="#ffc700" className="post-icon" onClick={handleEditClick} />
          <Icon icon="mdi:delete" color="#ffc700" className="post-icon" onClick={() => dispatch(deletePost(postID, navigate))} />
        </div>

      </div>

      {renderContent()}

    </div>
  );
}
