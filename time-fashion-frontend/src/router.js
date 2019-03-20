import Vue from 'vue'
import Router from 'vue-router'
// vistas
import Principal from '@/layouts/Principal.vue'
import Administrador from '@/layouts/Administrador.vue'
import Usuario from '@/layouts/Usuario.vue'
import Vendedor from '@/layouts/Vendedor.vue'
import Admin_inventario from '@/views/Admin_inventario.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/principal',
      name: 'principal',
      component: Principal
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: Administrador
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: Usuario
    },
    {
      path: '/vendedor',
      name: 'vendedor',
      component: Vendedor
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: Admin_inventario
    }
  ]
})
