import React, { Component } from 'react';
import Main from '../../Main/main';
import Navbar from '../../Navbar/navbar';
import Fold from '../../Fold/fold'


class Landing extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Fold />
      </div>
    );
  }
}

export default Landing;