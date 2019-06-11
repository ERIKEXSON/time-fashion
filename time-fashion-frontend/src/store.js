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
    empresas: [],
    usuarios: [],
    empleados: [],
    productos: [],
    tarjetas: [],
    pedidos: [],
    inventario: []
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
    },
    SET_USUARIOS (state, newVal) {
      state.usuarios = newVal
    },
    SET_EMPLEADOS (state, newVal) {
      state.empleados = newVal
    },
    SET_PRODUCTOS (state, newVal) {
      state.productos = newVal
    },
    SET_TARJETAS (state, newVal) {
      state.tarjetas = newVal
    },
    SET_PEDIDOS (state, newVal) {
      state.pedidos = newVal
    },
    SET_INVENTARIO (state, newVal) {
      state.inventario = newVal
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
