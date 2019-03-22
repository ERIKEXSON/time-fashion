<template>
  <v-app>
    <v-card width="1050">
      <v-card-title>
        DETALLES
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
          <td class="text-xs-left">{{ props.item.color }}</td>
          <td class="text-xs-left">{{ props.item.codigo }}</td>
          <td class="text-xs-left">{{ props.item.tallas }}</td>
          <td class="text-xs-left">{{ props.item.cantidad }}</td>
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
        { text: 'Color', value: 'color' },
        { text: 'Código', value: 'codigo' },
        { text: 'Tallas', value: 'tallas' },
        { text: 'Cantidad', value: 'cantidad' }
      ],
      desserts: [
        {
          color: 'Verde',
          codigo: 'AS981DA',
          tallas: 'S, M, XL',
          cantidad: 15
        },
        {
          color: 'Rojo',
          codigo: 'KOKD9I3J',
          tallas: 'S, M',
          cantidad: 10
        }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
