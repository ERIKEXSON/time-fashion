<template>
    <v-app>
        <nav class="borde">
            <div class="tituloCuadro"><h2>Historial de pedidos</h2></div>
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
                :headers="historialPedidos"
                :items="pedidoInventado"
                :search="search"
                >
                <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.numero }}</td>
                    <td class="text-xs-left">{{ props.item.informacion }}</td>
                    <td class="text-xs-left">{{ props.item.estado }}</td>
                    <td class="text-xs-left"><div class="botonSeguirPedido"><v-btn @click="seguirPedido = true">Seguir pedido</v-btn></div><div class="botonConfirmarPedido"><v-btn @click="confirmarPedido = true">Confirmar pedido</v-btn></div></td>
                </template>
                </v-data-table>
            </v-card>
        </nav>
        <v-dialog v-model="seguirPedido" width="1085">
            <v-card>
            <v-card-text>
                <nav class="borde">
                <div class="tituloCuadro"><h2>Información del envío</h2></div>
                <v-stepper non-linear>
                    <v-stepper-header>
                    <v-stepper-step
                        step="1"
                        editable
                    >
                        Pedido enviado por vendedor
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        step="2"
                        editable
                    >
                        Salida de país de origen
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        step="3"
                        editable
                    >
                        Llegada a país de destino
                    </v-stepper-step>
                    <v-stepper-step
                        step="4"
                        editable
                    >
                        Entregado
                    </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                    <v-stepper-content step="1">
                    <v-card
                        class="mb-5"
                    >
                     <nav class="borde">
                        <div class="tituloCuadro"><h2>Pedidos</h2></div>
                        <v-card width="993">
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
                            :headers="historialPedidosDialog"
                            :items="historialPedidosInventado"
                            :search="search"
                            >
                            <template v-slot:items="props">
                                <td class="text-xs-left">{{ props.item.numero }}</td>
                                <td class="text-xs-left">{{ props.item.informacion }}</td>
                                <td class="text-xs-left">{{ props.item.estado }}</td>
                            </template>
                            </v-data-table>
                        </v-card>
                        </nav>
                    </v-card>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                    <v-card
                        class="mb-5"
                    ><h3>China</h3></v-card>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                    <v-card
                        class="mb-5"
                    ><h3>Colombia</h3></v-card>
                    </v-stepper-content>
                    <v-stepper-content step="4">
                    <v-card
                        class="mb-5"
                    >
                    <h3 v-if="confirmarPedido">Pedido entregado</h3>
                    <h3 v-else>Pedido no a sido entregado</h3>
                    </v-card>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
                </nav>
                <v-card-actions>
                <v-spacer></v-spacer>
                <div class="botonCerrar"><v-btn flat @click="seguirPedido = false">Cerrar</v-btn></div>
                </v-card-actions>
            </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template>
<script>
export default {
  data () {
    return {
      confirmarPedido: false,
      seguirPedido: false,
      search: '',
      historialPedidos: [
        { text: 'Número de pedido', value: 'numero' },
        { text: 'Información del pedido', value: 'informacion' },
        { text: 'Estado del pedido', value: 'estado' },
        { text: 'Acciones de pedido' }
      ],
      historialPedidosDialog: [
        { text: 'Número de pedido', value: 'numero' },
        { text: 'Información del pedido', value: 'informacion' },
        { text: 'Estado del pedido', value: 'estado' }
      ],
      pedidoInventado: [
        {
          numero: '1363413',
          informacion: 'asdasd',
          estado: 'Entrega pendiente'
        }
      ]
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  },
  computed: {
    historialPedidosInventado () {
      return [{
        numero: this.pedidoInventado[0].numero,
        informacion: this.pedidoInventado[0].informacion,
        estado: this.pedidoInventado[0].estado
      }]
    }
  }
}
</script>
<style>
 .borde{
   text-align:center;
   border: #000000 3px solid;
   margin-bottom: 30px
 }
 .tituloCuadro{
   background-color:#000000;
   padding: 5px;
   color: white
 }
  .botonSeguirPedido{
    display: inline-block;
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
  }
  .botonSeguirPedido:hover{
    background-color: rgb(145, 45, 45)
 }
 .botonConfirmarPedido{
     display: inline-block;
     margin-left: 10px;
     background-color: rgba(34, 194, 215, 0.61);
     transition: all .2s linear
 }
 .botonConfirmarPedido:hover{
    background-color: rgb(145, 45, 45)
 }
</style>
