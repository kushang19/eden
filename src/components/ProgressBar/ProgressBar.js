// src/ProgressBar/ProgressBar.js
import React from 'react';
import './progressbar.css';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-container">
      {[1, 2, 3, 4].map((num) => (
        <React.Fragment key={num}>
          <div className={`circle ${step >= num ? 'active' : ''}`}>
            {num}
          </div>
          {num < 4 && (
            <div className={`line ${step > num ? 'active-line' : ''}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
