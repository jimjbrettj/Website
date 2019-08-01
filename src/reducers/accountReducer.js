import { LOGIN_CHANGE } from '../actions/accountActionTypes';

const initialState = {
  value: false
}

export default function(state = initialState, action) {
  switch(action.type){
    case LOGIN_CHANGE:
      console.log(state.value);
      return {
        ...state,
        value: !state.value
      };
    default: 
      return state;
  }
}