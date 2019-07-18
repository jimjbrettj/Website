import React from 'react';
import './list.scss';

window.onload = function(){
  document.getElementById('div1').style.backgroundColor = "Green";
  document.getElementById('div2').style.backgroundColor = "Green";
  document.getElementById('div3').style.backgroundColor = "Green";
  document.getElementById('div4').style.backgroundColor = "Purple";
  document.getElementById('div5').style.backgroundColor = "Purple";
  document.getElementById('div6').style.backgroundColor = "Purple";
  document.getElementById('div7').style.backgroundColor = "Blue";
  document.getElementById('div8').style.backgroundColor = "Blue";
  document.getElementById('div9').style.backgroundColor = "Blue";
}

function color(num) {
  var col;
  switch(num){
    case 1: 
      col = "Blue"
    break;
    case 2: 
      col ="Red"
    break;
    case 3: 
      col ="Orange"
    break;
    case 4: 
      col ="Yellow"
    break;
    case 5: 
      col ="Green"
    break;
    default:
      col = "Blue"
    break;
  }
  return col;
}

function rand() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  var id1 = "div"+a;
  var id2 = "div"+b;
  var col = color(Math.floor(Math.random() * 5 + 1));
  document.getElementById(id1).style.backgroundColor = col;
  document.getElementById(id2).style.backgroundColor = col;
  
}

function list() {
  return (
    <div>
      <div className="list">
        <div className="header">
          Select some of these
        </div>
        <div onClick={rand} id="div1" className="circle"/>
        <div onClick={rand} id="div2" className="circle"/>
        <div onClick={rand} id="div3" className="circle"/>
        <div onClick={rand} id="div4" className="circle"/>
        <div onClick={rand} id="div5" className="circle"/>
        <div onClick={rand} id="div6" className="circle"/>
        <div onClick={rand} id="div7" className="circle"/>
        <div onClick={rand} id="div8" className="circle"/>
        <div onClick={rand} id="div9" className="circle"/>
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