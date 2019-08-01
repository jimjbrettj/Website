import { INCREMENT, DECREMENT } from './types';

export const increment = () => dispatch => {
    dispatch({
      type: INCREMENT,
      payload: 1
    })
}

export const decrement = (val) => dispatch => {
  dispatch({
    type: DECREMENT,
    payload: val
  })
}