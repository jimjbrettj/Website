import React, { Component } from 'react';
import './main.scss';
import List from '../../components/List/list';
//import Slideshow from './Slideshow/slideshow';

class main extends Component{
  render() {
    return (
      <div>
        <div className="back1">
          <div className="c">
            <div className="arc"></div>

          </div>
        </div>
        <div className="back2">
          <div className="c">
            <List />
          </div>
        </div>
        <div className="back1">
          <div className="c">
  
          </div>
        </div>
      </div>
    );
  }
}

export default main;
