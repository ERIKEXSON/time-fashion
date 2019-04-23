<template>
    <v-app>
        <nav class="borde">
            <div class="tituloCuadro"><h2>Ventas</h2></div>
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
                        <td class="text-xs-left">{{ props.item.id }}</td>
                        <td class="text-xs-left">{{ props.item.empresa }}</td>
                        <td class="text-xs-left">{{ props.item.valor }}</td>
                        <!--<td class="text-xs-left" :v-model="dineroEmpresa()"></td>
                        <td class="text-xs-left">{{ dineroServicio() }}</td>-->
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
        { text: 'ID del pedido', value: 'id' },
        { text: 'Empresa', value: 'empresa' },
        { text: 'Valor de venta', value: 'valor' }/*,
        { text: 'Dinero para empresa', value: 'dineroempresa' },
        { text: 'Dinero servicio', value: 'dineroservicio' } */
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
  }/*,
  methods: {
    dineroEmpresa () {
      this.dineroempresa = this.valor - (this.valor * 0.3)
    },
    dineroServicio () {
      this.dineroservicio = this.valor * 0.3
    }
  } */
}
</script>
