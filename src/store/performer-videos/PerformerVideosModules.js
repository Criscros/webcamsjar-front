/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from      './PerformerVideosState.js'
import mutations from  './PerformerVideosMutation.js'
import actions from    './PerformerVideosActions.js'
import getters from    './PerformerVideosGetter.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

