import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
  value: 0
}

export default function(state = initialState, action) {
  switch(action.type){
    case INCREMENT:
      console.log("Reducing1");
      return {
        ...state,
        value: action.payload //initialState.value + action.payload
      };
      case DECREMENT:
          console.log("Reducing2");
          return {
            ...state,
            value: action.payload //initialState.value + action.payload
          }
    default: 
      return state;
  }
}











// export default (state = {}, action) => {
//   switch (action.type) {
//     case 'SIMPLE_ACTION':
//       return {
//         result: action.payload
//     }
//     default:
//      return state
//   }
// }