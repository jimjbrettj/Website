import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
  value: 0
}

export default function(state = initialState, action) {
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        value: action.payload
      };
      case DECREMENT:
          return {
            ...state,
            value: action.payload
          }
    default: 
      return state;
  }
}