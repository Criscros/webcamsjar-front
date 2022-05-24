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

  getAllStudios ({ commit }) {

    //var studio_id = localStorage.getItem('studio_id')

    return new Promise((resolve, reject) => {
      axios.get(`api/admin/get-all-studios`,{
       
      })
        .then((response) => {
          commit('SET_ESTUDIOS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeItem ({ commit }, sucursal_id) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/admin/sucursal/eliminar-sucursal`,{'sucursal_id':sucursal_id})
        .then((response) => {
          commit('REMOVE_ITEM', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  
}
