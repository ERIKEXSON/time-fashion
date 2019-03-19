import Vue from 'vue'
import Router from 'vue-router'
// vistas
import Principal from '@/layouts/Principal.vue'
import Administrador from '@/layouts/Administrador.vue'
import Usuario from '@/layouts/Usuario.vue'
import Login from '@/layouts/Login.vue'

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
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
