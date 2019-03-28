<template>
  <v-app id="inspire">
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black"
      dark
      app
      fixed
    >
    <div class="text-xs-center">
        <v-menu offset-y :nudge-width="200">
            <template v-slot:activator="{ on }">
              <v-btn
                icon="true"
                color="transparent"
                v-on="on"
                class="hidden-md-and-up"
              ><v-icon>menu</v-icon>
              </v-btn>
            </template>
            <v-list>
            <v-list-tile
              v-for="(item, index) in items2"
              :key="index"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <v-btn color="transparent" to="/">
        <img src="@/assets/logito.png" height="45px" width="90px" >
      </v-btn>
      <v-btn color="transparent" class="hidden-sm-and-down" to="hombre">
        <v-title>Hombre</v-title>
      </v-btn>
      <v-btn color="transparent"  class="hidden-sm-and-down">
        <v-title>Mujer</v-title>
      </v-btn>
      <v-btn color="transparent"  class="hidden-sm-and-down">
        <v-title>Niños</v-title>
      </v-btn>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Buscar"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-menu offset-y :nudge-width="200">
        <template v-slot:activator="{ on }">
          <v-btn
            icon="true"
            color="transparent"
            v-on="on"
            class="hidden-md-and-up"
          ><v-icon>search</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items3"
            :key="index"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
                <v-list-tile
                v-for="(item, index) in items1"
                :key="index"
                >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
            </v-menu>
        </div>
      <v-btn icon >
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
      <v-btn flat>Tops</v-btn>
      <v-btn flat>Bikini</v-btn>
      <v-btn flat>Busos</v-btn>
      <v-btn flat>Vestidos</v-btn>
      <v-btn flat>Shorts y Faldas</v-btn>
      <v-btn flat>Camisas</v-btn>
      <v-btn flat>Jeans Y Pantalones</v-btn>
      <v-btn flat>Joggers</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="grey darken-3"
      dark
      fixed
      style="margin-top: 89px"
      height="25px"
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
      {
        text: 'Hombre', icon: 'add'
      },
      {
        text: 'Mujer', icon: 'add'
      },
      {
        text: 'Niños'
      }
    ],
    items1: [
      { title: 'Iniciar sesión' },
      { title: 'Crear cuenta' }
    ],
    items2: [
      { title: 'Hombre' },
      { title: 'Mujer' },
      { title: 'Niños' }
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
