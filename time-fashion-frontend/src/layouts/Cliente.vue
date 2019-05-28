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
          @click="click(admin.to)"
        >
          <v-list-tile-action v-if="admin.icon">
            <v-icon v-text="admin.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-tile v-text="admin.text"></v-list-tile-tile>
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
        text: 'Perfil',
        icon: 'account_circle',
        to: '/cliente/perfil'
      },
      {
        text: 'Mis tarjetas',
        icon: 'credit_card',
        to: '/cliente/mistarjetas'
      },
      {
        text: 'Mis pedidos',
        icon: 'shopping_basket',
        to: '/cliente/mispedidos'
      },
      {
        text: 'Cambiar contraseña',
        icon: 'https',
        to: '/cliente/password'
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
  },
  methods: {
    click (to) {
      if (to === '/') {
        this.$store.commit('SET_USER', {})
        this.$router.push(to)
        return
      }
      this.$router.push(to)
    }
  }
}
</script>
<style lang="stylus">
  .accent--text i{
    color: #22C1D7 !important
  }
</style>
