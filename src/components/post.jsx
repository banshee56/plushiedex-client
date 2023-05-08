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
  // const [contentEdit, setContentEdit] = useState(false);
  // const [tagsEdit, setTagsEdit] = useState(false);
  // const [urlEdit, setUrlEdit] = useState(false);
  const post = useSelector((reduxState) => (reduxState.posts.current));

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchPost(postID));
    };
    fetch();
  }, []);

  const changeEdit = () => {
    setTitleEdit(!titleEdit);
  };

  const renderTitle = () => {
    console.log(titleEdit);
    if (titleEdit) {
      return (
        <form onSubmit={() => dispatch(updatePost(postID))}>
          <input type="textbox" className="title-textbox" />
        </form>

      );
    } else {
      return (
        <h1 onClick={changeEdit}>{post.title}</h1>
      );
    }
  };

  if (!post) {
    return <div className="page-container">ID: {postID}</div>;
  }

  console.log(post);

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

        {/* <h1>{post.title}</h1> */}
        <img src={post.coverUrl} className="cover-photo" />
        <ReactMarkdown className="post-text">{post.content}</ReactMarkdown>

        <p>{post.tags}</p>
      </div>

    </div>
  );
}
