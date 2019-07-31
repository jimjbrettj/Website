import { INCREMENT, DECREMENT } from './types';

export const increment = () => dispatch => {
    console.log("Incrementing");
    dispatch({
      type: INCREMENT,
      payload: 1
    })
}

export const decrement = (val) => dispatch => {
  console.log("Decrementing");
  dispatch({
    type: DECREMENT,
    payload: val
  })
}