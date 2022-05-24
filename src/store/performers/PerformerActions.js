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

    // var studio_id = localStorage.getItem('studio_id')

    return new Promise((resolve, reject) => {
      axios.get(`api/list-performers`,{
      })
        .then((response) => {

          console.log('PERFORMERS',response.data)
          commit('PERFORMERS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
