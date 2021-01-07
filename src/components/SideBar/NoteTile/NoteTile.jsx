import React from 'react';
import './NoteTile.css';

const NoteTile = ({title, value}) => {
  return (
    <div className="NoteTile">
      <div className="NoteTile--header">
        {title}
      </div>

      <div className="NoteTile--body">
        {value}
      </div>
    </div>
  );
};

export default NoteTile;