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
  addItem ({ commit }, item) {
    console.log('add Performer',item.name)
    return new Promise((resolve, reject) => {
      axios.post('/api/new-model/studio',{
        name:item.name,
        last_name :item.last_name,
        number_identification : item.number_identification,
        birth_day: item.birthday,
        studio_id : localStorage.getItem('studio_id'),
        email: item.email,
        phone : item.phone,
        type_conection : item.type_conection
    })
        .then((response) => {
          commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataListItems ({ commit }) {

    var studio_id = localStorage.getItem('studio_id')
    return new Promise((resolve, reject) => {
      axios.get(`api/admin/${studio_id}/studio-headquarters`,{
      })
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchStudioPhotos ({commit},sucursal_id ){

    return new Promise((resolve, reject) => {
      axios.get(`api/admin/${sucursal_id}/sucursal-photos`,{
      })
        .then((response) => {
         
          commit('SET_PRODUCTS',response.data )
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })  
  },
  getItemSucursal({commit},sucursal_id){
    
    return new Promise((resolve, reject) => {

      axios.get(`api/admin/${sucursal_id}/sucursal-information`,{
      })
        .then((response) => {
          commit('SET_SUCURSAL',response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })  
  },
  updateSede ({commit}, headquarter_data) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/update-headquarter`, {headquarter_data})
        .then((response) => {
          commit('UPDATE_PRODUCT',[response.data])
          resolve(response)
        })
        .catch((error) => { reject(error) })

    })
  },
  getLogoSucursal({commit},sucursal_id){
    
    return new Promise((resolve, reject) => {

      axios.get(`api/admin/${sucursal_id}/get-logo`,{
      })
        .then((response) => {
         
          commit('SET_PRODUCTS',response.data )
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })  
  },
  removePhoto ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/admin/sucursal/remove-room-photo`,{'photo_id':itemId})
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
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
  saveHeadquarter({commit}, data){
   
    return new Promise((resolve, reject) => {

      axios.post(`/api/new-headquarter`,{data})
        .then((response) => {
          commit('ADD_ITEM', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })

  },
}
