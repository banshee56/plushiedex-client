import React from 'react';
import { motion } from 'framer-motion';

export default function NewPost() {
  const handleSubmit = () => {
    console.log('hi');
  };

  return (
    <div className="container">
      <h1>Add New Plushie</h1>
      <div className="name-photo">
        <input type="textbox" placeholder="Name" className="textbox" />
        <input type="textbox" placeholder="Profile Photo URL" className="textbox" />
      </div>

      <input type="textbox" placeholder="Tags" className="textbox" />
      <input type="textbox" placeholder="Describe Your New Plushie" className="content-textbox" />

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
