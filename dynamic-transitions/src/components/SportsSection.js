// SportsSection.js
import React from 'react';
import './SportsSection.css'; // Import your CSS file for sports sections

const SportsSection = ({ backgroundImage, children }) => {
  return (
    <div className="sport-section" style={{ backgroundImage }}>
      {children}
    </div>
  );
};

export default SportsSection;
