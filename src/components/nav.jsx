import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function Nav(props) {
  const changeColor = () => {

  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="nav-item" id="logo">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon icon="mdi:teddy-bear" className="icon" onClick={changeColor} />
            </motion.div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts/new" className="nav-item" id="create-icon">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon icon="material-symbols:add-circle" className="icon" />
            </motion.div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
