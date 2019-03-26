<template>
  <v-app>
    <nav>
      <div><h2>Productos</h2></div>
      <v-card width="1045">
        <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        >
        </v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.precio }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
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
        { text: 'Nombre', value: 'name' },
        { text: 'Codigo', value: 'codigo' },
        { text: 'Precio', value: 'precio' },
        { text: 'Marca', value: 'marca' }
      ],
      desserts: [
        {
          name: 'Shorts',
          codigo: 'ASD812A',
          precio: 1000000,
          marca: 'roballo'
        }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
