<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
      stateless
      width="250"
      class="secondary"
    >
    <v-list style="color: white">
      <v-list-tile>
          <v-list-tile-action>
          <v-icon style="color:white">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Vendedor</v-list-tile-title>
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
      color="black"
      dark
      app
      fixed
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-btn depressed style="background-color: transparent" to="/"><img src="@/assets/logito.png" height="45px" width="90px"></v-btn>
    </v-toolbar-title>
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
        text: 'Productos',
        icon: 'assignment',
        to: '/vendedor/productos'
      },
      {
        text: 'Inventario',
        icon: 'all_inbox',
        to: '/vendedor/inventario'
      },
      {
        text: 'Cerrar sesión',
        to: '/'
      }
    ]
  }
  ),
  created () {
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
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
