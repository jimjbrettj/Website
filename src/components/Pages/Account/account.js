import React, { Component } from 'react';
import Navbar from '../../Navbar/navbar';
import Fold from '../../Fold/fold'
import './account.scss';


class Account extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className='content'>
            <div className='contentText'>
              Account
            </div>
          </div>
        <Fold />
      </div>
    );
  }
}

export default Account;