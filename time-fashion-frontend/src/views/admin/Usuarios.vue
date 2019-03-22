<template>
  <v-app>
    <v-card
        style="width: fit-content; height:fit-content; position: relative; top:0; bottom:0; left:0; rigth:0; margin:auto; font-size: 30px">
      <v-card-title>
        USUARIOS
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
          apellido: 'Mamerto',
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
