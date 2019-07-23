import React from 'react';
import './main.scss';
import List from '../../components/List/list';
import Slideshow from './Slideshow/slideshow';

function main() {
  return (
    <div>
      <div className="back1">
        <div className="c">
          <Slideshow />
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

export default main;
