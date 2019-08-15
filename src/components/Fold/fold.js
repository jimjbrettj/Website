import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginChange } from '../../actions/accountActions';
import './fold.scss';

class Fold extends Component{

  componentWillMount(){

  }

  render () {
    return (
      <div className="fold">
        <div className="text">You can alter this text {this.props.simple}</div>
        <div className="text">Login Status is: {this.props.login.toString()} and user is: {this.props.user}</div>
        <div className="text">I hope you are having a great day</div>
        <div className="text">Shred the gnar</div>
      </div>
    );
  }
}

Fold.propTypes = {
  loginChange: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  user: PropTypes.string
}

const mapStateToProps = state => ({
  login: state.login.value,
  user: state.login.name
});

export default connect(mapStateToProps, {loginChange })(Fold);