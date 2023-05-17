import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import { deletePost, fetchPost, updatePost } from '../actions';
import IconBar from './iconbar';

export default function Edit() {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((reduxState) => (reduxState.posts.current));

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

  return (
    <div className="page-container">
      <IconBar page="edit" />
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
    </div>

  );
}
