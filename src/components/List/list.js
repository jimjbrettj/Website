import React from 'react';
import './list.scss';

function list() {
  return (
    <div className="list">
      <ul id="myDropdown" className="dropdown-content">
        <li>Jimmy</li>
        <li>Matt</li>
        <li>Max</li>
      </ul> 
    </div>
  );
}

export default list;