import Vue from 'vue'
import Router from 'vue-router'
// vistas
import Inicio from './views/Inicio.vue'
import Productos from './views/admin/Productos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/admin/productos',
      name: 'productos-admin',
      component: Productos
    }
  ]
})
