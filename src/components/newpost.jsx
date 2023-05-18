import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
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
      gender: document.getElementById('gender').value,
      height: document.getElementById('height').value,
      weight: document.getElementById('weight').value,
    };
    console.log(post);
    dispatch(createPost(post, navigate));
  };

  return (
    <div className="page-container">
      <h1>Add New Plushie</h1>
      <div className="row-fields">
        <input type="textbox" placeholder="Name" className="textbox" id="name" />
        <input type="textbox" placeholder="Profile Photo URL" className="textbox" id="photo-url" />
      </div>

      <div className="row-fields">
        <input type="textbox" placeholder="Gender" className="textbox" id="gender" />
        <input type="textbox" placeholder="Height" className="textbox" id="height" />
        <input type="textbox" placeholder="Weight" className="textbox" id="weight" />
      </div>

      <input type="textbox" placeholder="Tags" className="textbox" id="tags" />
      <TextareaAutosize
        id="content"
        className="content-textbox"
        placeholder="Describe Your New Plushie"
      />

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
