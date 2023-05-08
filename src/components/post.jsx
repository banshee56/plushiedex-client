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

  const handleEditClick = () => {
    setEditing(!isEditing);
  };

  const updateField = (event) => {
    const updated = {
      title: event.target.value, content: post.content, coverUrl: post.coverURL, tags: post.tags,
    };
    dispatch(updatePost(updated, postID));
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <div className="column-container">
          <div className="label-input">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="name"> Name:</label>
            <input type="text" className="textbox" id="name" onChange={updateField} />
          </div>

          <label htmlFor="photo-url">
            Photo URL:
            <input type="text" className="textbox" id="photo-url" onChange={updateField} />
          </label>

          <label htmlFor="tags">
            Tags:
            <input type="text" className="textbox" id="tags" onChange={updateField} />
          </label>

          <label htmlFor="tags">
            Description:
            <textarea
              id="content"
              className="content-textbox"
              value={post.content}
              onChange={updateField}
            />
          </label>

        </div>

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
        <NavLink to="/">
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#ffc700" className="post-icon" />
        </NavLink>
        <div>
          <Icon icon="material-symbols:edit" color="#ffc700" className="post-icon" onClick={handleEditClick} />
          <Icon icon="mdi:delete" color="#ffc700" className="post-icon" onClick={() => dispatch(deletePost(postID, navigate))} />
        </div>

      </div>

      {renderContent()}

    </div>
  );
}
