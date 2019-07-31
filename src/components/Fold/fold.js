import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/simpleAction';
import './fold.scss';

class Fold extends Component{

  componentWillMount(){
    const testVal = 15;
    this.props.increment();
    this.props.decrement(testVal);
  }

  render () {
    return (
      <div className="fold">
        <div className="text">State is: {this.props.simple}</div>
        <div className="text">James Johnson</div>
        <div className="text">I hope you are having a great day</div>
        <div className="text">Shred the gnar</div>
      </div>
    );
  }
}

Fold.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  simple: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  simple: state.simple.value
});

export default connect(mapStateToProps, { increment, decrement })(Fold);