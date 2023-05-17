import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import '../style.scss';
import Nav from './nav';
import Post from './post';
import NewPost from './newpost';
import Posts from './posts';
import Edit from './edit';

export default function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:postID" element={<Post />} />
          <Route path="/posts/:postID/edit" element={<Edit />} />
          <Route path="*" element={<div> Post not found </div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
