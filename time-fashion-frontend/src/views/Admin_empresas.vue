<template>
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
      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
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
        { text: 'Correo', value: 'correo' }
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
  }
}
</script>
