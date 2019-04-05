<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
    <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
        </v-layout>
      </v-img>
      <v-list dense>
        <template v-for="item in items">
          <v-list-tile :key="item.text" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black"
      dark
      app
      fixed
    >
    <v-toolbar-title style="width: 100px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      </v-toolbar-title>

      <v-btn color="transparent" to="/" class="hidden-sm-and-down">
        <img src="@/assets/logito.png" height="45px" width="90px" >
      </v-btn>
      <v-btn color="transparent" class="hidden-sm-and-down" to="hombre">
        <v-title>Hombre</v-title>
      </v-btn>
      <v-btn color="transparent"  class="hidden-sm-and-down" to="mujer">
        <v-title>Mujer</v-title>
      </v-btn>
      <v-btn color="transparent"  class="hidden-sm-and-down" to="niños">
        <v-title>Niños</v-title>
      </v-btn>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Buscar"
      ></v-text-field>
      <v-spacer></v-spacer>
         <div class="text-xs-center">
            <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                icon="true"
                color="transparent"
                v-on="on"
                ><v-icon>perm_identity</v-icon>
                </v-btn>
            </template>
            <v-list>
              <v-btn to="/login" color="transparent">
                Iniciar sesión
              </v-btn>
              <v-btn to="/registrarse" color="transparent">
                Registarse
              </v-btn>
            </v-list>
            </v-menu>
        </div>
      <v-btn icon to="/carrito" >
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>

      </v-toolbar>
      <v-content class="cyan lighten-5">
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-card-actions class="black">
      <v-layout
        align-end
        fill-height
        pa-3
        white--text
      >
        <div class="titlefont-weight-thin">Get connected with us on social networks!</div>
      </v-layout>
        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="grey darken-3"
      dark
      fixed
      style="margin-top: 64px"
      height="25px"
      class="hidden-sm-and-down"
      >
    <v-spacer></v-spacer>

    <v-toolbar-items
    style="margin-right: 240px"
    >
      <v-btn to="/camisetas-hombre" flat>Camisetas</v-btn>
      <v-btn to="/tanks-hombre" flat>Tanks</v-btn>
      <v-btn to="/polos-hombre" flat>Polos</v-btn>
      <v-btn to="/busos-hombre" flat >Busos</v-btn>
      <v-btn to="/camisas-hombre" flat >Camisas</v-btn>
      <v-btn to="/shorts-hombre" flat >Shorts</v-btn>
      <v-btn to="/jeans-y-pantalones-hombre" flat >Jeans Y Pantalones</v-btn>
      <v-btn to="/joggers-hombre" flat >Joggers</v-btn>
    </v-toolbar-items>
  </v-toolbar>
   <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="grey darken-3"
      dark
      fixed
      style="margin-top: 56px"
      height="20px"
      class="hidden-md-and-up"
      >
    <v-spacer></v-spacer>

    <v-toolbar-items
    style="margin-right: 20px"
    >
      <v-btn to="/camisetas-hombre" flat>Camisetas</v-btn>
      <v-btn to="/tanks-hombre" flat>Tanks</v-btn>
      <v-btn to="/polos-hombre" flat>Polos</v-btn>
      <v-btn to="/busos-hombre" flat class="hidden-sm-and-down">Busos</v-btn>
      <v-btn to="/camisas-hombre" flat class="hidden-sm-and-down">Camisas</v-btn>
      <v-btn to="/shorts-hombre" flat class="hidden-sm-and-down">Shorts</v-btn>
      <v-btn to="/jeans-y-pantalones-hombre" flat class="hidden-sm-and-down">Jeans Y Pantalones</v-btn>
      <v-btn to="/joggers-hombre" flat class="hidden-sm-and-down">Joggers</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="grey darken-3"
      dark
      fixed
      style="margin-top: 76px"
      height="20px"
      class="hidden-md-and-up"
      >
    <v-spacer></v-spacer>

    <v-toolbar-items
    style="margin-right: 20px"
    >
      <v-btn to="/camisetas-hombre" flat class="hidden-sm-and-down">Camisetas</v-btn>
      <v-btn to="/tanks-hombre" flat class="hidden-sm-and-down">Tanks</v-btn>
      <v-btn to="/polos-hombre" flat class="hidden-sm-and-down">Polos</v-btn>
      <v-btn to="/busos-hombre" flat >Busos</v-btn>
      <v-btn to="/camisas-hombre" flat >Camisas</v-btn>
      <v-btn to="/shorts-hombre" flat >Shorts</v-btn>
      <v-btn to="/jeans-y-pantalones-hombre" flat class="hidden-sm-and-down">Jeans Y Pantalones</v-btn>
      <v-btn to="/joggers-hombre" flat class="hidden-sm-and-down">Joggers</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="grey darken-3"
      dark
      fixed
      style="margin-top: 96px"
      height="20px"
      class="hidden-md-and-up"
      >
    <v-spacer></v-spacer>

    <v-toolbar-items
    style="margin-right: 20px"
    >
      <v-btn to="/camisetas-hombre" flat class="hidden-sm-and-down">Camisetas</v-btn>
      <v-btn to="/tanks-hombre" flat class="hidden-sm-and-down">Tanks</v-btn>
      <v-btn to="/polos-hombre" flat class="hidden-sm-and-down">Polos</v-btn>
      <v-btn to="/busos-hombre" flat class="hidden-sm-and-down" >Busos</v-btn>
      <v-btn to="/camisas-hombre" flat class="hidden-sm-and-down" >Camisas</v-btn>
      <v-btn to="/shorts-hombre" flat class="hidden-sm-and-down" >Shorts</v-btn>
      <v-btn to="/jeans-y-pantalones-hombre" flat >Jeans Y Pantalones</v-btn>
      <v-btn to="/joggers-hombre" flat >Joggers</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="grey darken-3"
      dark
      fixed
      style="margin-top: 89px"
      height="20px"
      class="hidden-sm-and-down"
      >
    <v-spacer></v-spacer>

    <v-toolbar-items
    style="margin-right: 550px"
    >
      <v-btn flat>S</v-btn>
      <v-btn flat>M</v-btn>
      <v-btn flat>L</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    drawer: false,
    direction: 'bottom',
    fab: false,
    fling: false,
    tabs: null,
    transition: 'slide-y-reverse-transition',
    items: [
      { icon: '', text: 'Home', to: '/' },
      { icon: 'add', text: 'Hombre', to: '/hombre' },
      { icon: 'add', text: 'Mujer', to: '/mujer' },
      { icon: 'add', text: 'Niños', to: '/niños' }
    ],
    items1: [
      { title: 'Iniciar sesión' },
      { title: 'Crear cuenta' }
    ],
    icons: [
      'fab fa-facebook',
      'fab fa-instagram',
      'fab fa-whatsapp'
    ]
  })
}
props: {
  source: String
}
</script>
