/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
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

  const initialPost = {
    title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
  };

  const [updated, setUpdated] = useState(initialPost);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setUpdated({
      ...updated,
      [name]: value,
    });
  };

  const updateField = () => {
    const fields = {
      title: updated.title, content: updated.content, coverUrl: updated.coverURL, tags: updated.tags,
    };
    dispatch(updatePost(fields, postID));
  };

  const handleEditClick = () => {
    setEditing(!isEditing);

    if (isEditing) {
      updateField();
    }
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <form className="column-container">
          <label htmlFor="name">
            Name:
            <input type="text" className="textbox" name="title" onChange={handleInputChange} />
          </label>

          <label htmlFor="photo-url">
            Photo URL:
            <input type="text" className="textbox" name="coverURL" onChange={handleInputChange} />
          </label>

          <label htmlFor="tags">
            Tags:
            <input type="text" className="textbox" name="tags" onChange={handleInputChange} />
          </label>

          <label htmlFor="tags">
            Description:
            <textarea
              name="content"
              className="content-textbox"
              onChange={handleInputChange}
            />
          </label>

        </form>

      );
    } else {
      return (
        <div className="post-container">
          <h1>{post.title}</h1>
          <img src={post.coverUrl} className="cover-photo" />
          <ReactMarkdown className="post-text">{post.content}</ReactMarkdown>
          <p>{post.tags}</p>
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
          // animate={{ x: -10 }}
          // transition={{
          //   delay: 1,
          //   duration: 1,
          //   ease: 'easeInOut',
          //   repeat: Infinity,
          //   repeatDelay: 0.3,
          // }}
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
