<template>
  <v-flex>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Historial de pedidos</h2>
      </div>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="historialPedidos" :items="pedidos" :search="search">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.numero }}</td>
            <td class="text-xs-left">{{ props.item.informacion }}</td>
            <td class="text-xs-left">{{ props.item.fecha }}</td>
            <td class="text-xs-left">{{ props.item.valor }}</td>
            <td class="text-xs-left">{{ props.item.estado }}</td>
            <td class="text-xs-left">
              <div class="botonSeguirPedido"><v-btn @click="seguirPedido = true">Seguir pedido</v-btn></div>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </nav>
    <v-dialog v-model="seguirPedido">
      <v-card>
        <v-card-text>
          <nav class="borde">
            <div class="tituloCuadro">
              <h2>Información del envío</h2>
            </div>
            <v-stepper non-linear>
              <v-stepper-header>
                <v-stepper-step step="1" editable>Pedido enviado por vendedor</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" editable>Salida de país de origen</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" editable>Llegada a país de destino</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4" editable>Entregado</v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card flat class="mb-5">
                    <nav class="borde">
                      <div class="tituloCuadro">
                        <h2>Factura</h2>
                      </div>
                      <v-card>
                        <v-card-title></v-card-title>
                        <v-data-table :headers="factura" :items="detallesFactura" hide-actions>
                          <template v-slot:items="props">
                            <td class="text-xs-left">{{ props.item.cantidad }}</td>
                            <td class="text-xs-left">{{ props.item.descripcion }}</td>
                            <td class="text-xs-left">{{ props.item.preciounitario }}</td>
                            <td class="text-xs-left">{{ props.item.valorventa }}</td>
                          </template>
                        </v-data-table>
                      </v-card>
                    </nav>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card flat class="mb-5">
                    <h3>China</h3>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-card flat class="mb-5">
                    <h3>Colombia</h3>
                  </v-card>
                </v-stepper-content>
                <v-stepper-content step="4">
                  <v-card flat class="mb-5">
                    <h3 v-if="confirmarPedido">Pedido entregado</h3>
                    <h3 v-else>Pedido no a sido entregado</h3>
                  </v-card>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </nav>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="botonCerrar" flat @click="seguirPedido = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-flex>
</template>
<script>
import api from '@/plugins/api'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      confirmarPedido: false,
      seguirPedido: false,
      search: '',
      historialPedidos: [
        { text: 'Número de pedido', value: 'numero' },
        { text: 'Información del pedido', value: 'informacion' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Valor', value: 'valor' },
        { text: 'Estado del pedido', value: 'estado' },
        { text: 'Acciones de pedido', sortable: false }
      ],
      factura: [
        { text: 'Cantidad', value: 'cantidad', sortable: false },
        { text: 'Descripcion', value: 'descripcion', sortable: false },
        { text: 'Precio unitario', value: 'preciounitario', sortable: false },
        { text: 'Valor de venta', value: 'valorventa', sortable: false }
      ],
      detallesFactura: [
        {
          cantidad: 3,
          descripcion: 'camisa negra',
          preciounitario: 15000,
          valorventa: 45000
        },
        {
          cantidad: 6,
          descripcion: 'camisa blanca',
          preciounitario: 9000,
          valorventa: 54000
        }
      ]
    }
  },
  computed: {
    ...mapState(['pedidos'])
  },
  methods: {
    async getPedidos () {
      const { data: pedidosData } = await api.get('/order')
      this.$store.commit('SET_PEDIDOS', pedidosData)
    }
  },
  created () {
    this.getPedidos()
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style>
.borde {
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
  border-radius: 5px
}
.tituloCuadro {
  background-color: #000000;
  padding: 5px;
  color: white;
}
.botonSeguirPedido {
  display: inline-block;
  background-color: rgba(34, 194, 215, 0.61);
  transition: all 0.2s linear;
}
.botonSeguirPedido:hover {
  background-color: rgb(145, 45, 45);
}
</style>
