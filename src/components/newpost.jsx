import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';

import { useDispatch } from 'react-redux';
import { createPost } from '../actions';

export default function NewPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const post = {
      title: document.getElementById('name').value,
      coverURL: document.getElementById('photo-url').value,
      tags: document.getElementById('tags').value,
      content: document.getElementById('content').value,
    };

    dispatch(createPost(post, navigate));
  };

  return (
    <div className="page-container">
      <h1>Add New Plushie</h1>
      <div className="name-photo">
        <input type="textbox" placeholder="Name" className="textbox" id="name" />
        <input type="textbox" placeholder="Profile Photo URL" className="textbox" id="photo-url" />
      </div>

      <input type="textbox" placeholder="Tags" className="textbox" id="tags" />
      <TextareaAutosize autoFocus placeholder="Describe Your New Plushie" className="content-textbox" minRows={6} id="content" />
      {/* <input type="textbox" placeholder="Describe Your New Plushie" className="content-textbox" id="content" /> */}

      <div>
        <motion.input type="button"
          value="SUBMIT"
          onClick={handleSubmit}
          className="submit-button"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </div>

  );
}
