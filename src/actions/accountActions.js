import { LOGIN_CHANGE } from './accountActionTypes';

export const loginChange = (val) => dispatch => {
    dispatch({
      type: LOGIN_CHANGE,
      payload: val
    })
}
