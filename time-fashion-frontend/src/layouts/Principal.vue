<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
      style="height: 572px"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
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
      color="cyan lighten-1"
      dark
      app
      fixed
      height="100"
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3 ">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class=""></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Time Fashion!</span>
      </v-toolbar-title>
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
                <v-list-tile
                v-for="(item, index) in items1"
                :key="index"
                @click=""
                >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
            </v-menu>
        </div>
      <v-btn icon>
        <v-icon>add_shopping_cart</v-icon>
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
    <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="cyan lighten-1">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    drawer: false,
    items: [
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Hombres',
        model: false,
        children: [
          { icon: 'add', text: 'Ropa' },
          { icon: 'add', text: 'Zapatos' },
          { icon: 'add', text: 'Accesorios' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Mujeres',
        model: false,
        children: [
          { icon: 'add', text: 'Ropa' },
          { icon: 'add', text: 'Zapatos' },
          { icon: 'add', text: 'Accesorios' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Niños',
        model: false,
        children: [
          { icon: 'add', text: 'Ropa' },
          { icon: 'add', text: 'Zapatos' },
          { icon: 'add', text: 'Accesorios' }
        ]
      }
    ],
    items1: [
      { title: 'Iniciar sesión' },
      { title: 'Crear cuenta' }
    ],
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  })
}
props: {
  source: String
}
</script>
