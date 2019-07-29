import React, { Component } from 'react';
import './list.scss';
import beach from '../../assets/icons/beach.png';
import mountain from '../../assets/icons/mountain.png';
import controller from '../../assets/icons/controller.png'


class list extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  };

  color(num) {
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

  rand() {
    var a = Math.floor(Math.random() * 9 + 1);
    var b = Math.floor(Math.random() * 9 + 1);
    var id1 = "div"+a;
    var id2 = "div"+b;
    var col = this.color(Math.floor(Math.random() * 5 + 1));
    document.getElementById(id1).style.backgroundColor = col;
    document.getElementById(id2).style.backgroundColor = col;
    
  }

  render() {
    return (
      <div>
        <div className="list">
          <div className="header">
            Select some of these
          </div>
          <div onClick={() => this.rand()} id="div1" className="circle">
            <img src={beach} alt="Beach" className="iconWrap"></img>
          </div>
          <div onClick={() => this.rand()} id="div2" className="circle">
            <img src={mountain} alt="Mountain" className="iconWrap"></img>
          </div>
          <div onClick={() => this.rand()} id="div3" className="circle">
            <img src={controller} alt="Beach" className="iconWrap"></img>
          </div>
          <div onClick={() => this.rand()} id="div4" className="circle"/>
          <div onClick={() => this.rand()} id="div5" className="circle"/>
          <div onClick={() => this.rand()} id="div6" className="circle"/>
          <div onClick={() => this.rand()} id="div7" className="circle"/>
          <div onClick={() => this.rand()} id="div8" className="circle"/>
          <div onClick={() => this.rand()} id="div9" className="circle"/>
        </div>
      </div>
    );
  }
}

export default list;