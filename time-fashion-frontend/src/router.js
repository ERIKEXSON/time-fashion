import Vue from 'vue'
import Router from 'vue-router'
// vistas
import Inicio from './views/Inicio.vue'
import Admin from './layouts/Administrador.vue'
import AdminProductos from './views/admin/Productos.vue'
import AdminEmpresas from './views/admin/Empresas.vue'
import AdminUsuarios from './views/admin/Usuarios.vue'
import AdminInventario from './views/admin/Inventario.vue'
import AdminInventarioDetalles from './components/admin/InventarioDetalles.vue'
import AdminEmpresaEmpleados from './components/admin/EmpresaEmpleados.vue'

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
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/productos',
      name: 'productos-admin',
      component: AdminProductos
    },
    {
      path: '/admin/empresas',
      name: 'empresas-admin',
      component: AdminEmpresas
    },
    {
      path: '/admin/empresas/empleados',
      name: 'empleadosEmpresa-admin',
      component: AdminEmpresaEmpleados
    },
    {
      path: '/admin/usuarios',
      name: 'usuarios-admin',
      component: AdminUsuarios
    },
    {
      path: '/admin/inventario',
      name: 'inventario-admin',
      component: AdminInventario
    },
    {
      path: '/admin/inventario/detalles',
      name: 'detallesInventario-admin',
      component: AdminInventarioDetalles
    }
  ]
})
