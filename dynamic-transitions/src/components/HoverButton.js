// HoverButton.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HoverButton = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          outline: 'none',
          textDecoration: 'none', 
        }}
      >
        {children}
      </motion.button>
    </Link>
  );
};

export default HoverButton;
