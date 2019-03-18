import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/views/Inicio.vue'
import Peliculas from '@/views/Peliculas.vue'
import Contactenos from '@/views/Contactenos.vue'

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
      path: '/peliculas',
      name: 'peliculas',
      component: Peliculas
    },
    {
      path: '/contactenos',
      name: 'contactenos',
      component: Contactenos
    }
  ]
})
