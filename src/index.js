import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.scss';
import App from '../src/components/App';
import * as serviceWorker from './serviceWorker';
import throttle from 'lodash/throttle';

import store from './store';
import { saveState } from './localStorage';

store.subscribe(throttle(() => {
  saveState({
    login: store.getState().login});
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
