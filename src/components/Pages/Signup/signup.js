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
            <div className="createAccountWrapper">
              <div className="title">
                Create an Account
              </div>
              <form id="signUpForm" className="f">
                <div>
                  <p>
                    <label>First Name</label>
                    <input className="firstName" type="text" name="firstName" id="firstName" required/>
                  </p>
                  <p>
                    <label>Last Name</label>
                    <input className="lastName" type="text" name="lastName" id="lastName" required/>
                  </p>
                </div>
                <div>
                  <p>
                    <label>Email</label>
                    <input className="email" type="email" name="email" id="eamil" required/>
                  </p>
                  <p>
                    <label>Password</label>
                    <input className="pass" type="text" name="pass" id="pass" required/>
                  </p>
                </div>

                <button className="button" type="submit">
                  <div className="butText">
                    Submit
                  </div>
                </button>
              </form>
            </div>
          </div>
        <Fold />
      </div>
    );
  }
}

export default Signup;