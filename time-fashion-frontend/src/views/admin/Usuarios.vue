<template>
  <v-app>
    <nav style="text-align:center;border: #000000 3px solid">
      <div style="background-color: #000000; padding: 5px;color: white"><h2>Usuarios</h2></div>
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
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.apellido }}</td>
            <td class="text-xs-left">{{ props.item.documento }}</td>
            <td class="text-xs-left">{{ props.item.tipodocumento }}</td>
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
        { text: 'Documento', value: 'documento' },
        { text: 'Tipo de documento', value: 'tipodocumento' },
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Teléfono', value: 'telefono' }
      ],
      desserts: [
        {
          nombre: 'Errik',
          apellido: 'Mamerto',
          documento: '123123123',
          tipodocumento: 'CC',
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
