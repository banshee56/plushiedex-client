/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import { deletePost, fetchPost, updatePost } from '../actions';

export default function Post(props) {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titleEdit, setTitleEdit] = useState(false);
  const [contentEdit, setContentEdit] = useState(false);
  const [tagsEdit, setTagsEdit] = useState(false);
  const [urlEdit, setUrlEdit] = useState(false);
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

  const changeTitleEdit = (e) => {
    e.preventDefault();
    setTitleEdit(!titleEdit);
  };

  const onTitleChange = (event) => {
    const updated = {
      title: event.target.value, content: post.content, coverUrl: post.coverURL, tags: post.tags,
    };
    dispatch(updatePost(updated, postID));
  };

  const renderTitle = () => {
    if (titleEdit) {
      return (
        <form onSubmit={changeTitleEdit}>
          <input type="textbox" className="title-textbox" onChange={onTitleChange} />
        </form>

      );
    } else {
      return (
        <h1 onClick={changeTitleEdit}>{post.title}</h1>
      );
    }
  };

  const changeContentEdit = (e) => {
    e.preventDefault();
    console.log('clicking content');
    setContentEdit(!contentEdit);
  };

  const onContentChange = (event) => {
    const updated = {
      title: post.title, content: event.target.value, coverUrl: post.coverURL, tags: post.tags,
    };
    dispatch(updatePost(updated, postID));
  };

  const renderContent = () => {
    if (contentEdit) {
      return (
        <form onSubmit={changeContentEdit}>
          <textarea />
        </form>

      );
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onClick={changeContentEdit}>
          <ReactMarkdown className="post-text">{post.content}</ReactMarkdown>
        </div>
      );
    }
  };

  const changeTagsEdit = (e) => {
    e.preventDefault();
    setTagsEdit(!tagsEdit);
  };

  const onTagsChange = (event) => {
    const updated = {
      title: post.title, content: post.content, coverUrl: post.coverURL, tags: event.target.value,
    };
    dispatch(updatePost(updated, postID));
  };

  const renderTags = () => {
    if (tagsEdit) {
      return (
        <form onSubmit={changeTagsEdit}>
          <input type="textbox" className="title-textbox" onChange={onTagsChange} />
        </form>

      );
    } else {
      return (
        <p onClick={changeTagsEdit}>{post.tags}</p>
      );
    }
  };
  return (
    <div className="page-container">
      <div className="icon-bar">
        <NavLink to="/">
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#ffc700" className="post-icon" />
        </NavLink>
        <Icon icon="mdi:delete" color="#ffc700" className="post-icon" onClick={() => dispatch(deletePost(postID, navigate))} />
      </div>

      <div className="post-container">
        {renderTitle()}
        <img src={post.coverUrl} className="cover-photo" />
        {renderContent()}
        {renderTags()}
        {/* <ReactMarkdown className="post-text">{post.content}</ReactMarkdown> */}

        {/* <p>{post.tags}</p> */}
      </div>

    </div>
  );
}
