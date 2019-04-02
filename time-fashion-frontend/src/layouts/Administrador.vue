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
        <v-list-tile color='primary'>
            <v-list-tile-action>
            <v-icon color='primary'>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Administrador</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile active-class="accent--text" style="color:white">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            active-class="accent--text"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
      <v-list-tile
      color='white'
      v-for="admin in admins"
      :key="admin.admins"
      >
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
    items: [
      {
        action: 'people_outline',
        title: 'Usuarios',
        items: [
          {
            title: 'Agregados',
            to: '/admin/usuarios'
          },
          {
            title: 'Agregar',
            to: '/admin/usuarios'
          }
        ]
      },
      {
        action: 'domain',
        title: 'Empresas',
        items: [
          { title: 'Lista' }
        ]
      }
    ],
    admins: [
      {
        text: 'Productos',
        icon: 'assignment',
        to: '/admin/productos'
      },
      {
        text: 'Inventario',
        icon: 'all_inbox',
        to: '/admin/inventario'
      },
      {
        text: 'Cerrar sesión',
        to: '/'
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
    color #22C1D7 !important
  }
</style>
