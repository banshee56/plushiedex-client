import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import IconBar from './iconbar';

export default function Edit() {
  const { postID } = useParams();
  const post = useSelector((reduxState) => (reduxState.posts.current));

  if (!post) {
    return <div className="page-container">ID: {postID}</div>;
  }
  const [fields, setFields] = useState({
    title: post.title, content: post.content, coverUrl: post.coverURL, tags: post.tags,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    const { value } = e.target;
    setFields({
      ...fields,
      [e.target.name]: value,
    });
  };

  return (
    <div className="page-container">
      <IconBar page="edit" fields={fields} />
      <form className="column-container">
        <label htmlFor="name">
          Name:
          <input type="text" defaultValue={post.title} name="title" onChange={handleUpdate} className="input" />
        </label>

        <label htmlFor="photo-url">
          Photo URL:
          <input type="text" defaultValue={post.coverUrl} name="coverUrl" onChange={handleUpdate} className="input" />
        </label>

        <label htmlFor="gender">
          Gender: <input type="text" defaultValue={post.gender} name="gender" onChange={handleUpdate} className="input" />
        </label>

        <label htmlFor="height">
          Height: <input type="text" defaultValue={post.height} name="height" onChange={handleUpdate} className="input" />
        </label>

        <label htmlFor="weight">
          Weight: <input type="text" defaultValue={post.weight} name="weight" onChange={handleUpdate} className="input" />
        </label>

        <label htmlFor="tags">
          Tags:
          <input type="text" defaultValue={post.tags} name="tags" onChange={handleUpdate} className="input" />
        </label>

        Description:<br />
        <TextareaAutosize
          name="content"
          defaultValue={post.content}
          type="text"
          onChange={handleUpdate}
          className="input-content"
        />

      </form>
    </div>

  );
}
