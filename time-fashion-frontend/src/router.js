import Vue from 'vue'
import Router from 'vue-router'
// vistas
import Inicio from './views/Inicio.vue'
import Admin from './views/admin/Inicio.vue'
import AdminProductos from './views/admin/Productos.vue'
import AdminEmpresas from './views/admin/Empresas.vue'
import AdminUsuarios from './views/admin/Usuarios.vue'
import AdminInventario from './views/admin/Inventario.vue'
import AdminInventarioDetalles from './components/admin/InventarioDetalles.vue'
import AdminEmpresaEmpleados from './components/admin/EmpresaEmpleados.vue'
import Hombre from './views/hombres/ropahombre.vue'
<<<<<<< HEAD
import Mujer from './views/mujeres/ropamujer.vue'
=======
import Vendedor from './views/vendedor/Inicio.vue'
import VendedorInventario from './views/vendedor/Inventario.vue'
import VendedorProductos from './views/vendedor/Productos.vue'
import VendedorProductosDetalles from './components/vendedor/InventarioDetalles.vue'
>>>>>>> c3b670776b9f340f2dc60737ea4aa2e365a2e30a

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/admin/productos",
      name: "productosAdmin",
      component: AdminProductos
    },
    {
      path: "/admin/empresas",
      name: "empresasAdmin",
      component: AdminEmpresas
    },
    {
      path: "/admin/empresas/empleados",
      name: "empleadosEmpresaAdmin",
      component: AdminEmpresaEmpleados
    },
    {
      path: "/admin/usuarios",
      name: "usuariosAdmin",
      component: AdminUsuarios
    },
    {
      path: "/admin/inventario",
      name: "inventarioAdmin",
      component: AdminInventario
    },
    {
      path: "/admin/inventario/detalles",
      name: "detallesInventarioAdmin",
      component: AdminInventarioDetalles
    },
    {
      path: "/hombre",
      name: "hombre",
      component: Hombre
    },
    {
<<<<<<< HEAD
      path: '/mujer',
      name: 'mujer',
      component: Mujer
=======
      path: "/vendedor",
      name: "vendedor",
      component: Vendedor
    },
    {
      path: "/vendedor/inventario",
      name: "inventarioVendedor",
      component: VendedorInventario
    },
    {
      path: "/vendedor/inventario/detalles",
      name: "detallesInventarioVendedor",
      component: VendedorProductosDetalles
    },
    {
      path: "/vendedor/productos",
      name: "productosVendedor",
      component: VendedorProductos
>>>>>>> c3b670776b9f340f2dc60737ea4aa2e365a2e30a
    }
  ]
});
