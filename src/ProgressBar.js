import React from 'react';
import './ProgressBar.css'; // Assuming you have a separate CSS file for the ProgressBar component

// ProgressBar component definition
const ProgressBar = ({ label, completed }) => {
  return (
    <div className="progress-bar-container">
      <label className="progress-bar-label">{label}</label>
      <div className="progress-bar">
        <div className={`progress-bar-fill ${completed ? 'completed' : ''}`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
