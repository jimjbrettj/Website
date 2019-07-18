import React from 'react';
import Dropdown from'./Dropdown/dropdown'
import './navbar.scss';
import Elements from './Elements/elements';

function navbar() {
  return (
      <div className="navbar">
        <div className="header"></div>
        <div>
           <Elements />
        </div>
        <div>
           <Dropdown />
        </div>
      </div>
  );
}

export default navbar;