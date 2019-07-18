import React from 'react';
import './main.scss';
import List from '../../components/List/list';
import Slideshow from './Slideshow/slideshow';

function main() {
  return (
   <div className="back">
     <List />
     <Slideshow />
   </div>
  );
}

export default main;
