<template>
  <v-app id="inspire">
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3 ">
        <span class="hidden-sm-and-down">Time Fashion!</span>
      </v-toolbar-title>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>
              <v-spacer></v-spacer>

      <v-btn icon class="hidden-sm-and-down">
        <v-title>add_shopping_cart</v-title>
      </v-btn>
              <v-spacer></v-spacer>

      <v-btn icon class="hidden-sm-and-down">
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>
        <v-spacer></v-spacer>
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
                class="hidden-sm-and-down"
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
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>
            <v-btn icon large class="hidden-sm-and-down">
        <v-avatar size="40px" tile>
          <img src="@/assets/logo.svg">
        </v-avatar>
      </v-btn>
      <v-speed-dial
        v-model="fab"
        :direction="direction"
        :transition="transition"
        class="hidden-md-and-up"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            fab
            icon="true"
          >
            <v-icon>more_vert</v-icon>
            <v-icon>close</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="green"
        >
          <v-icon>perm_identity</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>add_shopping_cart</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
        >
          <v-icon>notifications</v-icon>
        </v-btn>
      </v-speed-dial>
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
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Hombre',
        model: false,
        children: [
          {text: 'Camisetas' },
          {text: 'Tanks' },
          {text: 'Polos' },
          {text: 'Busos' },
          {text: 'Camisas' },
          {text: 'Shorts' },
          {text: 'Jeans y Pantalones' },
          {text: 'Joggers' },
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Mujere',
        model: false,
        children: [
          {text: 'Tops' },
          {text: 'Bikini' },
          {text: 'Busos' },
          {text: 'Vestidos' },
          {text: 'Shorts y Faldas' },
          {text: 'Camisas' },
          {text: 'Jeans y Pantalones' },
          {text: 'Joggers' },
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Niños',
        model: false,
        children: [
          {text: 'Niño' },
          {text: 'Niña' }
        ]
      }
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