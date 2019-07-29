import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { simpleAction } from '../actions/simpleAction';
//import Navigation from './Navigation/navigation';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from './Pages/Landing/landing';
import SignUpPage from './Pages/Signup/signup';
import AccountPage from './Pages/Account/account';
import SettingsPage from './Pages/Settings/settings';

import * as ROUTES from '../common/routes';

// const mapStateToProps = state => ({
//   ...state
//  })

//  const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
//  })

class App extends Component {

  // simpleAction = (event) => {
  //   this.props.simpleAction();
  //  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.SETTINGS} component={SettingsPage} />
          <Route path={ROUTES.HOME} />
        </div>  
      </Router>
    );
  }
}
export default App;

//export default connect(mapStateToProps, mapDispatchToProps)(App);

// <button onClick={this.simpleAction}>Test redux action</button>
//         <pre>
//         {
//           JSON.stringify(this.props)
//         }
//         </pre>


// {/* <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
// <Route path={ROUTES.SIGN_IN} component={SignInPage} />
// <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
// <Route path={ROUTES.HOME} component={HomePage} />
// <Route path={ROUTES.ACCOUNT} component={AccountPage} />
// <Route path={ROUTES.ADMIN} component={AdminPage} /> */}