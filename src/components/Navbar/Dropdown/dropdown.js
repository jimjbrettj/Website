import React from 'react';
import './dropdown.scss';
import icon from '../../../assets/icons/dropdown.png'

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

function dropdown() { 
  return (
    <div className="dropdown">
      <div onClick={myFunction} className="dropdown-label">
        <div className="dropdown-text">
          Dropdown
        </div>
        <div className="icon">
          <img src={icon} alt="Dropdown Arrow"></img>
        </div>
      </div>
      <ul id="myDropdown" className="dropdown-content">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
}

export default dropdown;