<template>
  <v-app>
    <v-card width="1050">
      <v-card-title>
        INVENTARIO
      <v-spacer></v-spacer>
      <div >
        <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        >
        </v-text-field>
      </div>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.codigo }}</td>
        <td class="text-xs-left">{{ props.item.marca }}</td>
        <td class="text-xs-left">{{ props.item.valor }}</td>
        <v-btn to="/admin/inventario/detalles">Detalles</v-btn>
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
        { text: 'Código', value: 'codigo' },
        { text: 'Marca', value: 'marca' },
        { text: 'Valor', value: 'valor' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'camison',
          codigo: '87364502-1',
          marca: 'roballo',
          valor: 78234
        }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
