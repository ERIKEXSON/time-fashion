<template>
    <v-flex xs12>
        <nav class="borde">
            <div class="tituloCuadro"><h2>Ventas</h2></div>
            <v-card>
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
                        <td class="text-xs-left">{{ props.item.id }}</td>
                        <td class="text-xs-left">{{ props.item.empresa }}</td>
                        <td class="text-xs-left">{{ props.item.valor }}</td>
                    </template>
                </v-data-table>
            </v-card>
        </nav>
    </v-flex>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'ID del pedido', value: 'id' },
        { text: 'Empresa', value: 'empresa' },
        { text: 'Valor de venta', value: 'valor' },
        { text: 'Dinero para empresa', value: 'dineroempresa' },
        { text: 'Dinero servicio', value: 'dineroservicio' }
      ],
      desserts: [
        {
          id: '41234234',
          empresa: 'asdasd',
          valor: 12354234
        }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
