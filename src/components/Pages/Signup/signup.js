import React, { Component } from 'react';
import Navbar from '../../Navbar/navbar';
import Fold from '../../Fold/fold';
import './signup.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginChange } from '../../../actions/accountActions';


class Signup extends Component {

  componentDidMount() {
    document.getElementById('signUpForm').addEventListener('submit', () => this.changeLoginStatus());
  }

  componentWillUnmount() {
    document.getElementById('signUpForm').removeEventListener('submit', () => this.changeLoginStatus());
  }

  changeLoginStatus() {
    var input = document.getElementById('firstName').value;
    if (!this.props.login) {
      this.props.loginChange(input);
    } else {
      this.props.loginChange('');
    }
  }

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
                  Submit
                </button>
              </form>
            </div>
          </div>
        <Fold />
      </div>
    );
  }
}

Signup.propTypes = {
  loginChange: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  user: PropTypes.string
}

const mapStateToProps = state => ({
  login: state.login.value,
  user: state.login.name
});

export default connect(mapStateToProps, { loginChange })(Signup);