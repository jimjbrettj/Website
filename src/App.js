import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './components/Main/main';
import Navbar from './components/Navbar/navbar';
import Fold from './components/Fold/fold'
import { simpleAction } from './actions/simpleAction';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Fold />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
