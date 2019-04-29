import Vue from 'vue'
import Router from 'vue-router'
// vistas
import Inicio from './views/Inicio.vue'
import Admin from './views/admin/Inicio.vue'
import AdminProductos from './views/admin/Productos.vue'
import AdminEmpresas from './views/admin/Empresas.vue'
import AdminUsuarios from './views/admin/Usuarios.vue'
import AdminPedidos from './views/admin/Pedidos.vue'
import AdminVentas from './views/admin/Ventas.vue'
import AdminInventario from './views/admin/Inventario.vue'
import Vendedor from './views/vendedor/Inicio.vue'
import VendedorEmpleados from './views/vendedor/Empleados.vue'
import VendedorInventario from './views/vendedor/Inventario.vue'
import VendedorProductos from './views/vendedor/Productos.vue'
import VendedorPedidos from './views/vendedor/pedidos.vue'
import VendedorFactura from './views/vendedor/factura.vue'
import Cliente from './views/cliente/Inicio.vue'
<<<<<<< HEAD
import Client from './views/cliente/perfil.vue'
import Clientecompra from './views/cliente/miscompras.vue'
import Clientedireccion from './views/cliente/Misdirecciones.vue'
=======
import ClientePerfil from './views/cliente/Perfil.vue'
import ClienteCompras from './views/cliente/Miscompras.vue'
import ClienteDireccion from './views/cliente/Misdirecciones.vue'
import ClienteMetododePago from './views/cliente/MetodosdePago.vue'
>>>>>>> e4408f91a4d512eff0466e93399e3f7e0f7d37f1
import Hombre from './views/hombres/ropahombre.vue'
import Mujer from './views/mujeres/ropamujer.vue'
import Niños from './views/niños/inicio.vue'
import Niño from './views/niños/ropaniño.vue'
import Niña from './views/niños/ropaniña.vue'
import Camisetashombre from './views/hombres/camisetas.vue'
import Tankshombre from './views/hombres/tanks.vue'
import Poloshombre from './views/hombres/polos.vue'
import Busoshombre from './views/hombres/busos.vue'
import Camisashombre from './views/hombres/camisas.vue'
import Shortshombre from './views/hombres/shorts.vue'
import Jeanshombre from './views/hombres/jeans.vue'
import Joggershombre from './views/hombres/joggers.vue'
import Login from './views/Login.vue'
import Carrito from './views/carrito.vue'
import Registrarse from './views/registrarse.vue'
import Topsmujer from './views/mujeres/tops.vue'
import Bikinimujer from './views/mujeres/bikini.vue'
import Busosmujer from './views/mujeres/buso.vue'
import Vestidosmujer from './views/mujeres/vestidos.vue'
import Shortsmujer from './views/mujeres/short.vue'
import Camisasmujer from './views/mujeres/camisa.vue'
import Pantalonesmujer from './views/mujeres/pantalones.vue'
import Joggersmujer from './views/mujeres/joggers.vue'
import Camisetasniño from './views/niños/niño/camisetas.vue'
import Busosniño from './views/niños/niño/busos.vue'
import Shortsniño from './views/niños/niño/shorts.vue'
import Joggersniño from './views/niños/niño/joggers.vue'
import Busosniña from './views/niños/niña/busos.vue'
import Joggersniña from './views/niños/niña/joggers.vue'
import Vestidosniña from './views/niños/niña/vestidos.vue'
import Topsniña from './views/niños/niña/tops.vue'

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
      path: '/admin/usuarios',
      name: 'usuariosAdmin',
      component: AdminUsuarios
    },
    {
      path: '/admin/pedidos',
      name: 'pedidosAdmin',
      component: AdminPedidos
    },
    {
      path: '/admin/ventas',
      name: 'ventasAdmin',
      component: AdminVentas
    },
    {
      path: '/admin/inventario',
      name: 'inventarioAdmin',
      component: AdminInventario
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
      path: '/vendedor/productos',
      name: 'productosVendedor',
      component: VendedorProductos
    },
    {
      path: '/vendedor/pedidos',
      name: 'pedidosVendedor',
      component: VendedorPedidos
    },
    {
      path: '/vendedor/factura',
      name: 'facturavenndedor',
      component: VendedorFactura
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
      path: '/camisetas-hombre',
      name: 'camisetas',
      component: Camisetashombre
    },
    {
      path: '/tanks-hombre',
      name: 'tanks',
      component: Tankshombre
    },
    {
      path: '/polos-hombre',
      name: 'polos',
      component: Poloshombre
    },
    {
      path: '/busos-hombre',
      name: 'busos',
      component: Busoshombre
    },
    {
      path: '/camisas-hombre',
      name: 'camisas',
      component: Camisashombre
    },
    {
      path: '/shorts-hombre',
      name: 'shorts',
      component: Shortshombre
    },
    {
      path: '/jeans-y-pantalones-hombre',
      name: 'jeans',
      component: Jeanshombre
    },
    {
      path: '/joggers-hombre',
      name: 'joggers',
      component: Joggershombre
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
    },
    {
      path: '/registrarse',
      name: 'registrarse',
      component: Registrarse
    },
    {
      path: '/tops-mujer',
      name: 'tops',
      component: Topsmujer
    },
    {
      path: '/bikini-mujer',
      name: 'bikini',
      component: Bikinimujer
    },
    {
      path: '/busos-mujer',
      name: 'buso',
      component: Busosmujer
    },
    {
      path: '/vestidos-mujer',
      name: 'vestidos',
      component: Vestidosmujer
    },
    {
      path: '/shorts-y-faldas-mujer',
      name: 'short',
      component: Shortsmujer
    },
    {
      path: '/camisas-mujer',
      name: 'camisa',
      component: Camisasmujer
    },
    {
      path: '/jeans-y-pantalones-mujer',
      name: 'pantalones',
      component: Pantalonesmujer
    },
    {
      path: '/joggers-mujer',
      name: 'jogger',
      component: Joggersmujer
    },
    {
      path: '/camisetas-niño',
      name: 'camiseta',
      component: Camisetasniño
    },
    {
      path: '/busos-niño',
      name: 'busos-niño',
      component: Busosniño
    },
    {
      path: '/shorts-niño',
      name: '/shorts-niño',
      component: Shortsniño
    },
    {
      path: '/joggers-niño',
      name: '/joggers-niño',
      component: Joggersniño
    },
    {
      path: '/busos-niña',
      name: '/busos-niña',
      component: Busosniña
    },
    {
      path: '/joggers-niña',
      name: '/joggers-niña',
      component: Joggersniña
    },
    {
      path: '/vestidos-niña',
      name: '/vestidos-niña',
      component: Vestidosniña
    },
    {
      path: '/tops-niña',
      name: '/tops-niña',
      component: Topsniña
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: Cliente
    },
    {
      path: '/cliente/perfil',
      name: 'clientePerfil',
      component: ClientePerfil
    },
    {
      path: '/cliente/compras',
      name: 'clienteMiscompras',
      component: ClienteCompras
    },
    {
      path: '/cliente/direccion',
      name: 'clienteMisdirecciones',
      component: ClienteDireccion
    },
    {
      path: '/cliente/metodosdepago',
      name: 'clienteMetodosdePago',
      component: ClienteMetododePago
    }
  ]
})
