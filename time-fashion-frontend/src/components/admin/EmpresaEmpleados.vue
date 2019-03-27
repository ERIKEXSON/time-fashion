<template>
  <v-app>
    <nav style="border: #6a1b9a 3px solid;margin-bottom: 30px">
      <div style="background-color:#6a1b9a;padding: 5px;color: white"><h2>Empleados</h2></div>
      <v-card width="1045">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
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
    </nav>
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
