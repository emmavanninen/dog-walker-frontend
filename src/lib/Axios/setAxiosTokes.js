import Axios from './Axios'
const setAxiosToken = token => {
  if (token) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete Axios.defaults.headers.common['Authorization']
  }
}
export default setAxiosToken
