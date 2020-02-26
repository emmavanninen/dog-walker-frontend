
import { SET_CURRENT_AUTH_LOGIN_TOKEN } from '../constants/authConstants'

const initialState = {
  user: {
    isAuthenticated: null,
    owner: null
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_AUTH_LOGIN_TOKEN:
      return {
        ...state,
        user: {
          isAuth: true,
          owner: action.payload.owner,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          phone: action.payload.phone
        }
      }
    default:
      return state
  }
}
