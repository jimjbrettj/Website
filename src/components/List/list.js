import React from 'react';
import './list.scss';

function list() {
  return (
    <div className="back">
      <div className="list">
        <div className="header">
          Here are some features
        </div>
        <ul>
          <li>- We can do this</li>
          <li>- We can also do this</li>
          <li>- Sometimes we even do this</li>
        </ul>
      </div>
      <div className="triangle0"></div>
      <div className="triangle1"></div>
      <div className="triangle2"></div>
      <div className="triangle3"></div>
      <div className="triangle4"></div>
      <div className="triangle5"></div>
      <div className="triangle6"></div>
    </div>
  );
}

export default list;