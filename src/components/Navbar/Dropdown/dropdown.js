import React, { Component } from 'react';
import './dropdown.scss';
import icon from '../../../assets/icons/lines.png'
import Signup from './../Signup/signup';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-label')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

class dropdown extends Component{ 
  render() {
    return (
      <div className="dropdown">
        <Signup />
        <div onClick={myFunction} className="dropdown-label">
            Settings
          <img src={icon} alt="Dropdown Arrow" className="icon"></img>
        </div>
        <ul id="myDropdown" className="dropdown-content">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    );
  }
}

export default dropdown;