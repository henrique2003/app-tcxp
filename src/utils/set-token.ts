import api from '../services/api'

// make this after set the token in local storage
const token = (): void => {
  if (localStorage.token) {
    api.defaults.headers.common.Authorization = localStorage.token
  } else {
    delete api.defaults.headers.common.Authorization
  }
}

export default token
