<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
      stateless
      width="250"
      class="grey darken-1"
    >
    <v-list style="color: white">
      <v-list-tile>
          <v-list-tile-action>
          <v-icon style="color:white">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Administrador</v-list-tile-title>
      </v-list-tile>
      <v-list-tile
          v-for="(admin, i) in admins"
          :key="i"
          :to="admin.to"
          active-class="accent--text"
      >
          <v-list-tile-title v-text="admin.text"></v-list-tile-title>
          <v-list-tile-action>
          <v-icon v-text="admin.icon" color="white" active-class="accent--text"></v-icon>
          </v-list-tile-action>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="purple darken-3"
      dark
      app
      fixed
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <span class="hidden-sm-and-down">Time Fashion</span>
      </v-toolbar-title>
      <v-btn icon>
        <v-icon >add_shopping_cart</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
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
        text: 'Usuarios',
        icon: 'people_outline',
        to: '/admin/usuarios'
      },
      {
        text: 'Productos',
        icon: 'assignment',
        to: '/admin/productos'
      },
      {
        text: 'Empresas',
        icon: 'domain',
        to: '/admin/empresas'
      },
      {
        text: 'Inventario',
        icon: 'all_inbox',
        to: '/admin/inventario'
      }
    ]
  }
  ),
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  props: {
    source: String
  }
}
</script>
<style lang="stylus">
  .accent--text i{
    color #82B1FF !important
  }
</style>
