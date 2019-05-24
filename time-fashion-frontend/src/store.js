import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'principal-layout',
    userLogin: {}
  },
  mutations: {
    SET_LAYOUT (state, newVal) {
      state.layout = newVal
    },
    SET_LOGIN (state, newVal) {
      state.login = newVal
    },
    SET_LOGOUT (state, newVal) {
      state.login = newVal
    }
  },
  actions: {

  }
})
