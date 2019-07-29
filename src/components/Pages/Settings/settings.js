import React, { Component } from 'react';
import Navbar from '../../Navbar/navbar';
import Fold from '../../Fold/fold';
import './settings.scss';


class Settings extends Component {


  render() {
    return (
      <div>
        <Navbar />
          <div className='content'>
            <div className='contentText'>
              Settings
            </div>
          </div>
        <Fold />
      </div>
    );
  }
}

export default Settings;