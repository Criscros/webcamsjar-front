// axios
import axios from 'axios'
import firebase from 'firebase'
import 'firebase/storage'

const baseURL = "http://localhost:3000/"
//const baseURL = "https://api.mokitajar.com"
const conf = {
  
}


firebase.initializeApp(conf);

const storage = firebase.storage()

export {
  storage
}

export default axios.create({
  baseURL: baseURL,
  headers: {
      'Authorization': localStorage.getItem('accessToken')
  } 

  //You can add your headers here
})
