import React, { Component } from 'react';
import './signin.scss';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../../common/routes';


class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  };

  componentDidMount() {
    document.addEventListener('mousedown', (event) => this.handleClickOutside(event));
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', (event) => this.handleClickOutside(event));
  }

  handleClickOutside(event) {
    if (!event.target.matches('.popUp') && !event.target.matches('.signInButton') && this.state.show === true
      && !event.target.matches('.name') && !event.target.matches('.pass') && !event.target.matches('.button') && !event.target.matches('.buttonText')) {
      console.log('You clicked outside of me!');
      let st = this.state.show;
      console.log(st);
      this.setState({ show: !st});
    }
  }

  handleClick() {
    let st = this.state.show;
    console.log(st);
    this.setState({ show: !st});
  };

  render(){
    return (
      <div>
        <Link to={ROUTES.SIGN_UP}>
          <div className="signInButton">Sign Up</div>
        </Link>
        <div className={this.state.show ? "popUp" : "noPopUp"}>
          <form id="contactForm" className="form">
            <div>
              <p>
                <label>Username</label>
                <input className="name" type="text" name="name" id="name" required/>
              </p>
            </div>
            <div>
              <p>
                <label>Password</label>
                <input className="pass" type="text" name="pass" id="pass" required/>
              </p>
            </div>
            <button className="button" type="submit">
              <div className="buttonText">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
        
    );
  }
};

export default signup;