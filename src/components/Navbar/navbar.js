import React from 'react';
import Dropdown from'./Dropdown/dropdown'
import './navbar.scss';

function navbar() {
  return (
      <div className="navbar">
        <div className="header">Title</div>
        <div>
          <Dropdown />
        </div>
      </div>
  );
}

export default navbar;