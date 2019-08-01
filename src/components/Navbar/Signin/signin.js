import React, { Component } from 'react';
import './signin.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginChange } from '../../../actions/accountActions';

import * as ROUTES from '../../../common/routes';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  };

  componentDidMount() {
    document.addEventListener('mousedown', (event) => this.handleClickOutside(event));
    document.getElementById('contactForm').addEventListener('submit', () => this.changeLoginStatus());
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', (event) => this.handleClickOutside(event));
  }

  handleClickOutside(event) {
    if (!event.target.matches('.popUp') && !event.target.matches('.signInButton') && this.state.show === true
      && !event.target.matches('.name') && !event.target.matches('.pass') && !event.target.matches('.button')
      && !event.target.matches('.buttonText') && !event.target.matches('.createText')) {
      let st = this.state.show;
      this.setState({ show: !st});
    }
  }

  changeLoginStatus() {
    this.props.loginChange();
  }

  handleClick() {
    let st = this.state.show;
    this.setState({ show: !st});
  };

  render(){
    return (
      <div>
        <div onClick={() => this.handleClick()} className="signInButton">Login</div>
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
            <Link to={ROUTES.SIGN_UP}>
              <div className="createText">Create an account</div>
            </Link>

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

Signup.propTypes = {
  loginChange: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  login: state.login.value
});

export default connect(mapStateToProps, { loginChange })(Signup);