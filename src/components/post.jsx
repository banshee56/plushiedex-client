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

  const showEditIcon = () => {
    if (isEditing) {
      return (
        <motion.div
          transition={{ duration: 1 }}
          whileHover={{ rotate: [0, 360] }}
        >
          <Icon icon="teenyicons:tick-circle-solid" color="#ffc700" className="post-icon" onClick={handleEditClick} />
        </motion.div>
      );
    } else {
      return (
        <motion.div
          transition={{ duration: 1 }}
          whileHover={
          { rotate: [0, 360] }
        }
        >
          <Icon icon="material-symbols:edit" color="#ffc700" className="post-icon" onClick={handleEditClick} />
        </motion.div>
      );
    }
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <form className="column-container">
          <label htmlFor="name">
            Name:
            <input type="text" defaultValue={post.title} name="title" onChange={updateTitle} className="input" />
          </label>

          <label htmlFor="photo-url">
            Photo URL:
            <input type="text" defaultValue={post.coverUrl} name="coverURL" onChange={updateCover} className="input" />
          </label>

          <label htmlFor="tags">
            Tags:
            <input type="text" defaultValue={post.tags} name="tags" onChange={updateTags} className="input" />
          </label>

          Description:<br />
          <TextareaAutosize
            name="content"
            defaultValue={post.content}
            type="text"
            onChange={updateContent}
            className="input-content"
          />

        </form>

      );
    } else {
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
        <div className="post-container">
          <h1>{post.title}</h1>
          {showCover()}
          {showContent()}
          {/* <img src={post.coverUrl} className="cover-photo" alt="cover" />
          <ReactMarkdown className="post-text">{post.content}</ReactMarkdown> */}
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
          whileHover={{ rotate: [0, 45, 0, -45, 0] }}
        >
          <NavLink to="/">
            <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#ffc700" className="post-icon" />
          </NavLink>
        </motion.div>
        <div className="edit-delete">
          {showEditIcon()}

          <motion.div
            transition={{ duration: 1 }}
            whileHover={{ rotate: [0, 360] }}
          >
            <Icon icon="mdi:delete" color="#ffc700" className="post-icon" onClick={() => dispatch(deletePost(postID, navigate))} />

          </motion.div>
        </div>

      </div>

      {renderContent()}

    </div>
  );
}
