import { LOGIN_CHANGE } from './accountActionTypes';

export const loginChange = () => dispatch => {
    dispatch({
      type: LOGIN_CHANGE,
    })
}
