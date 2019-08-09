import { LOGIN_CHANGE } from '../actions/accountActionTypes';

const initialState = {
  value: false,
  name: ''
}

export default function(state = initialState, action) {
  switch(action.type){
    case LOGIN_CHANGE:
      return {
        ...state,
        value: !state.value,
        name: action.payload
      };
    default: 
      return state;
  }
}