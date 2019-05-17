<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="250"
      class="secondary"
    >
      <v-list>
        <v-list-tile
          color='words'
          v-for="(admin, index) in admins"
          :key="index"
          :to="admin.to"
        >
          <v-list-tile-action v-if="admin.icon">
            <v-icon>{{ admin.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-tile>{{ admin.text }}</v-list-tile-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="black"
      dark
      app
    >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>
      <v-btn depressed style="background-color: transparent" to="/"><img src="@/assets/logito.png" height="45px" width="90px"></v-btn>
    </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    drawer: true,
    admins: [
      {
        text: 'Empleados',
        icon: 'people_outline',
        to: '/vendedor/empleados'
      },
      {
        text: 'Productos',
        icon: 'assignment',
        to: '/vendedor/productos'
      },
      {
        text: 'Inventario',
        icon: 'all_inbox',
        to: '/vendedor/Inventario'
      },
      {
        text: 'Pedidos',
        icon: 'money',
        to: '/vendedor/pedidos'
      },
      {
        text: 'Factura',
        icon: 'assignment',
        to: '/vendedor/factura'
      },
      {
        text: 'Cambiar contraseña',
        icon: 'https',
        to: '/vendedor/password'
      },
      {
        text: 'Cerrar sesión',
        to: '/'
      }
    ]
  }
  ),
  props: {
    source: String
  }
}
</script>
<style lang="stylus">
  .accent--text i{
    color #22C1D7 !important
  }
</style>
