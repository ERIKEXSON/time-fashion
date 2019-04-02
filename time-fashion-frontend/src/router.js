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
import Mujer from './views/mujeres/ropamujer.vue'
import Vendedor from './views/vendedor/Inicio.vue'
import VendedorEmpleados from './components/vendedor/Empleados.vue'
import VendedorInventario from './views/vendedor/Inventario.vue'
import VendedorProductos from './views/vendedor/Productos.vue'
import VendedorProductosDetalles from './components/vendedor/InventarioDetalles.vue'
import Niños from './views/niños/inicio.vue'
import Niño from './views/niños/ropaniño.vue'
import Niña from './views/niños/ropaniña.vue'
import Camisetas from './views/hombres/camisetas.vue'
import Tanks from './views/hombres/tanks.vue'
import Polos from './views/hombres/polos.vue'
import Busos from './views/hombres/busos.vue'
import Camisas from './views/hombres/camisas.vue'
import Shorts from './views/hombres/shorts.vue'
import Jeans from './views/hombres/jeans.vue'
import Joggers from './views/hombres/joggers.vue'
import Login from './views/Login.vue'
import Carrito from './views/carrito.vue'

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
      name: 'productosAdmin',
      component: AdminProductos
    },
    {
      path: '/admin/empresas',
      name: 'empresasAdmin',
      component: AdminEmpresas
    },
    {
      path: '/admin/empresas/empleados',
      name: 'empleadosEmpresaAdmin',
      component: AdminEmpresaEmpleados
    },
    {
      path: '/admin/usuarios',
      name: 'usuariosAdmin',
      component: AdminUsuarios
    },
    {
      path: '/admin/inventario',
      name: 'inventarioAdmin',
      component: AdminInventario
    },
    {
      path: '/admin/inventario/detalles',
      name: 'detallesInventarioAdmin',
      component: AdminInventarioDetalles
    },
    {
      path: '/hombre',
      name: 'hombre',
      component: Hombre
    },
    {
      path: '/mujer',
      name: 'mujer',
      component: Mujer
    },
    {
      path: '/vendedor',
      name: 'vendedor',
      component: Vendedor
    },
    {
      path: '/vendedor/empleados',
      name: 'empleados',
      component: VendedorEmpleados
    },
    {
      path: '/vendedor/inventario',
      name: 'inventarioVendedor',
      component: VendedorInventario
    },
    {
      path: '/vendedor/inventario/detalles',
      name: 'detallesInventarioVendedor',
      component: VendedorProductosDetalles
    },
    {
      path: '/vendedor/productos',
      name: 'productosVendedor',
      component: VendedorProductos
    },
    {
      path: '/niños',
      name: 'niños',
      component: Niños
    },
    {
      path: '/niño',
      name: 'niño',
      component: Niño
    },
    {
      path: '/niña',
      name: 'niña',
      component: Niña
    },
    {
      path: '/camisetas',
      name: 'camisetas',
      component: Camisetas
    },
    {
      path: '/tanks',
      name: 'tanks',
      component: Tanks
    },
    {
      path: '/polos',
      name: 'polos',
      component: Polos
    },
    {
      path: '/busos',
      name: 'busos',
      component: Busos
    },
    {
      path: '/camisas',
      name: 'camisas',
      component: Camisas
    },
    {
      path: '/shorts',
      name: 'shorts',
      component: Shorts
    },
    {
      path: '/jeans-y-pantalones',
      name: 'jeans',
      component: Jeans
    },
    {
      path: '/joggers',
      name: 'joggers',
      component: Joggers
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: Carrito
    }
  ]
})
