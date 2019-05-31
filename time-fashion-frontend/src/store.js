import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'principal-layout',
    user: {},
    empresas: []
  },
  mutations: {
    SET_LAYOUT (state, newVal) {
      state.layout = newVal
    },
    SET_USER (state, newVal) {
      state.user = newVal
    },
    SET_EMPRESAS (state, newVal) {
      state.empresas = newVal
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
