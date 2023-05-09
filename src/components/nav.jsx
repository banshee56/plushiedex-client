import { NavLink } from 'react-router-dom';
import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" id="logo">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="home-container"
            >
              <Icon icon="mdi:teddy-bear" className="icon" />
            </motion.div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts/new" id="create-icon">
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
