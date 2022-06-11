import React from 'react';
import './square.scss';

function Square ({ value, onClick }) {
  return (
    <button 
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;