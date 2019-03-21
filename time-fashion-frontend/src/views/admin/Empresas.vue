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
        EMPRESAS
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
          <td class="text-xs-left">{{ props.item.nit }}</td>
          <td class="text-xs-left">{{ props.item.telefono }}</td>
          <td class="text-xs-left">{{ props.item.correo }}</td>
          <button
          style="background-color: RGB(105, 105, 105, 0.2); font-size:15px; position: relative; color:#6a1b9a; border: solid 2px #6a1b9a; bottom: 5px; right: 8px"
          >
          Empleados
          </button>
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
        { text: 'Nombre', value: 'name' },
        { text: 'NIT', value: 'nit' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Correo', value: 'correo' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'Totto',
          nit: '87364502-1',
          telefono: '321564651',
          correo: 'jbfjhbue@erjg.com'
        }
      ]
    }
  },
  created () {
      this.$store.commit('SET_LAYOUT', 'administrador-layout')
    }
}
</script>
