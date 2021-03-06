import React, { Component } from 'react';
import './main.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginChange } from '../../actions/accountActions';

class Main extends Component{
  render() {
    return (
      <div>
        <div className="back1">
          <div className="c">
          </div>
        </div>
        <div className="back2">
          <div className="c">
          </div>
        </div>
        <div className="back1">
          <div className="c">
  
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  loginChange: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  user: PropTypes.string
}

const mapStateToProps = state => ({
  login: state.login.value,
  user: state.login.name
});

export default connect(mapStateToProps, { loginChange })(Main);
