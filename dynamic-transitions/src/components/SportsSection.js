// SportsSection.js
import React from 'react';
import './SportsSection.css'; // Import your CSS file for sports sections

const SportsSection = ({ index , children, classname }) => {
  return (
    <div id={`section-${index}`} className={classname} >
      {children}
    </div>
  );
};

export default SportsSection;
