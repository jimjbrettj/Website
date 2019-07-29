import React, { Component } from 'react';
import Navbar from '../../Navbar/navbar';
import Fold from '../../Fold/fold';
import './signup.scss';


class Signup extends Component {


  render() {
    return (
      <div>
        <Navbar />
          <div className='content'>
            <div className='contentText'>
              Sign Up
            </div>
          </div>
        <Fold />
      </div>
    );
  }
}

export default Signup;