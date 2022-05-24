/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './EstudioState.js'
import mutations from './EstudioMutation.js'
import actions from './EstudioListActions.js'
import getters from './EstudioGetter.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

