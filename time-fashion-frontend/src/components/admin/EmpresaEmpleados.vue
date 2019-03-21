<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        fixed
        app
        stateless
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
    <v-card
        style="width: fit-content; height:fit-content; position: relative; top:0; bottom:0; left:0; rigth:0; margin:auto; font-size:30px">
      <v-card-title>
        EMPLEADOS
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.apellido }}</td>
          <td class="text-xs-left">{{ props.item.correo }}</td>
          <td class="text-xs-left">{{ props.item.direccion }}</td>
          <td class="text-xs-left">{{ props.item.telefono }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Teléfono', value: 'telefono' }
      ],
      desserts: [
        {
          name: 'Errik',
          apellido: 'Marto',
          correo: 'asdasda@hola.com',
          direccion: 'asdasdasd123123',
          telefono: '123123123'
        }
      ]
    }
  },
  created () {
      this.$store.commit('SET_LAYOUT', 'administrador-layout')
    }
}
</script>
