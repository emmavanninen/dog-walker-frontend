import { SET_CURRENT_AUTH_LOGIN_TOKEN } from '../constants/authConstants'

export const setCurrentAuthUser = decoded => {
  return {
    type: SET_CURRENT_AUTH_LOGIN_TOKEN,
    payload: decoded
  }
}
