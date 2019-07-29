import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Main/main';
import Navbar from './Navbar/navbar';
import Fold from './Fold/fold'
import { simpleAction } from '../actions/simpleAction';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation/navigation';

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
      <Router>
        <Navigation />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

        // <Navbar />
        // <Main />
        // <Fold />
        // <button onClick={this.simpleAction}>Test redux action</button>
        // <pre>
        // {
        //   JSON.stringify(this.props)
        // }
        // </pre>