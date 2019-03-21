<template>
<v-app>
    <v-navigation-drawer
        stateless
        value="true"
        style="background-color: RGB(105, 105, 105)"
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
                @click=""
            >
                <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                <v-list-tile-action>
                <v-icon v-text="admin[1]" style="color:white"></v-icon>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
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
    admins: [
      ['Datos de los usuarios', 'people_outline'],
      ['Datos de los productos', 'assignment'],
      ['Datos de las empresas', 'domain'],
      ['Inventario', 'all_inbox']
    ]
  })
}
</script>
