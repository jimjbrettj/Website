import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from './Pages/Landing/landing';
import SignUpPage from './Pages/Signup/signup';
import AccountPage from './Pages/Account/account';
import SettingsPage from './Pages/Settings/settings';

import * as ROUTES from '../common/routes';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.SETTINGS} component={SettingsPage} />
          </div>  
      </Router>
    );
  }
}
export default App;
