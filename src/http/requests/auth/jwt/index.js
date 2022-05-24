import axios from '@/axios.js'
import store from '../../../../store/store.js'



// Token Refresh
let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched (access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

export default {
  init () {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch('auth/fetchAccessToken')
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`
            resolve(axios(originalRequest))
          })
        })
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })
  },
  login (email, pwd) {
    return axios.post('/api/auth/login', {
      email,
      password: pwd
    })
  },
  registerUser (name, email, pwd,rol) {

    return axios.post('/api/auth/studio/register', {
      displayName: name,
      email,
      password: pwd,
      repassword : pwd,
      rol: rol,
    })
  },
  refreshToken () {
    return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('accessToKen')})
  },
  forgotPassword (email){

    return axios.post('/api/auth/forgotpassword', {
      email: email,
    })
  },
  resetPassword(password, token){
    localStorage.setItem('accessToken',token)     
    return axios.post('/api/auth/resetpassword', {
      password: password,
      user_id : localStorage.getItem('user_id'),
    })
  },
  searchName(data ){
   
    return axios.post('/api/validate-name-studio', {
      nick: data.name,
      type: data.type

    })
  },
  departmentsCities(){
       
    return axios.get('/api/studios/departments-cities')

  }

}
