/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {


  getAllPerformers ({ commit }) {

    return new Promise((resolve, reject) => {
      axios.get(`api/list-performers`,{
       
      })
        .then((response) => {
         
          commit('performers', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  

}
