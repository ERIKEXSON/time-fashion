<template>
  <v-flex xs12>
    <nav class="borde">
      <div class="tituloCuadro"><h2>Inventario</h2></div>
      <v-card>
        <v-card-title>
          <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
          >
          </v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="inventario"
        :search="search"
      >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.codigo }}</td>
          <td class="text-xs-left">{{ props.item.marca }}</td>
          <td class="text-xs-left">{{ props.item.cantidad }}</td>
          <div class="botonDetalles"><v-btn @click="detalles = true">Detalles</v-btn></div>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="detalles">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro"><h2>Detalles</h2></div>
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
                  :headers="encabezados"
                  :items="contenido"
                  :search="search"
                >
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.color }}</td>
                    <td class="text-xs-left">{{ props.item.codigo }}</td>
                    <td class="text-xs-left">{{ props.item.tallas }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </nav>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="botonCerrar" flat @click="detalles = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </nav>
  </v-flex>
</template>
<script>
import api from '@/plugins/api'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      detalles: false,
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Código', value: 'codigo' },
        { text: 'Marca', value: 'marca' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: '', sortable: false }
      ],
      encabezados: [
        { text: 'Color', value: 'color' },
        { text: 'Código', value: 'codigo' },
        { text: 'Tallas', value: 'tallas' }
      ],
      contenido: [
        {
          color: 'asdasd',
          codigo: '87364502-1',
          tallas: 'ras'
        }
      ]
    }
  },
  computed: {
    ...mapState(['inventario'])
  },
  methods: {
    async getInventario () {
      const { data: inventarioData } = await api.get('/inventories')
      this.$store.commit('SET_INVENTARIO', inventarioData)
    }
  },
  created () {
    this.getInventario()
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
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
  .botonCerrar{
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear;
    border-radius: 15px
  }
  .botonCerrar:hover{
    background-color: rgb(145, 45, 45)
  }
  .botonDetalles{
    display: inline-block;
    margin-right: 40px;
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
  }
  .botonDetalles:hover{
    background-color: rgb(145, 45, 45)
  }
</style>
