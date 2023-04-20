import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, NavLink,
  useParams,
} from 'react-router-dom';
import './style.scss';

function About(props) {
  return <div> All there is to know about me </div>;
}

function Welcome(props) {
  return <div>Welcome</div>;
}

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-item">About</NavLink></li>
        <li><NavLink to="/test/id1" className="nav-item">test id1</NavLink></li>
        <li><NavLink to="/test/id2" className="nav-item">test id2</NavLink></li>
      </ul>
    </nav>
  );
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
