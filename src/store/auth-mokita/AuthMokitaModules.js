/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './AuthMokitaState.js'
import mutations from './AuthMokitaMutation.js'
import actions from './AuthMokitaActions.js'
import getters from './AuthMokitaGetter.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

