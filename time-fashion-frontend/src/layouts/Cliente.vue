<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      stateless
      width="250"
      class="secondary"
    >
      <v-list>
        <v-list-tile color='words'>
            <v-list-tile-action>
            <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Mi cuenta</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list-tile
      color='words'
      v-for="admin in admins"
      :key="admin.admins"
      :to="admin.to"
      >
        <v-list-tile-action v-if="admin.icon">
          <v-icon>{{ admin.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-tile>{{ admin.text }}</v-list-tile-tile>
        </v-list-tile-content>
      </v-list-tile>
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
        text: 'perfilprueba',
        to: '/cliente/perfil'
      },
      {
        text: 'Mis compras',
        icon: 'assignment',
        to: '/cliente/compra'
      },
      {
        text: 'Valoraciones',
        icon: 'all_inbox'
      },
      {
        text: 'Mis cupones',
        icon: ''
      },
      {
        text: 'Artículos vistos recientemente',
        icon: ''
      },
      {
        text: 'Mi dirección de entrega',
        icon: ''
      },
      {
        text: 'Cambiar contraseña',
        icon: ''
      },
      {
        text: 'Centro de Denuncias',
        icon: ''
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
