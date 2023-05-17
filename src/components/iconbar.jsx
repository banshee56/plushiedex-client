import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import { deletePost, fetchPost, updatePost } from '../actions';

export default function IconBar(props) {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditClick = () => {
    if (props.page === 'edit') {
      navigate(`/posts/${postID}`);
    } else {
      navigate(`/posts/${postID}/edit`);
    }
  };
  const showEditIcon = () => {
    if (props.page === 'edit') {
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
  return (
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
  );
}
