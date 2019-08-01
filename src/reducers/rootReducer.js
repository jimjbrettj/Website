import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import accountReducer from './accountReducer'

export default combineReducers({
  simple: simpleReducer,
  login: accountReducer
});
