import jwt_decode from 'jwt-decode'
// import { setCurrentAuthUser } from './authActions'
import { SET_CURRENT_AUTH_LOGIN_TOKEN } from '../constants/authConstants'
import Axios from '../..//lib/Axios/Axios'
import setAxiosToken from '../../lib/Axios/setAxiosToken'

//! OWNER
export const ownerRegister = (value, history) => async dispatch => {
  try {
    let createdOwner = await Axios.post('/api/owners/register', value)
    let { token } = createdOwner.data
    setAxiosToken(token)
    localStorage.setItem('jwt-dog-token', token)
    let decoded = jwt_decode(token)

    dispatch({
      type: SET_CURRENT_AUTH_LOGIN_TOKEN,
      payload: decoded
    })
    // setCurrentAuthUser(decoded)
    history.push('/owner/home')
  } catch (e) {
    // showErrors(e.response.data)
  }
}
