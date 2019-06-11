<template>
  <v-flex xs12>
    <nav class="borde">
      <div class="tituloCuadro"><h2>Productos</h2></div>
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
        :items="productos"
        :search="search"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.precio }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <td class="text-xs-left">{{ props.item.empresa }}</td>
          </template>
        </v-data-table>
      </v-card>
    </nav>
  </v-flex>
</template>
<script>
import api from '@/plugins/api'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Codigo', value: 'codigo' },
        { text: 'Precio', value: 'precio' },
        { text: 'Marca', value: 'marca' },
        { text: 'Empresa', value: 'empresa' }
      ]
    }
  },
  computed: {
    ...mapState(['productos'])
  },
  methods: {
    async getProductos () {
      const { data: productosData } = await api.get('/products')
      this.$store.commit('SET_PRODUCTOS', productosData)
    }
  },
  created () {
    this.getProductos()
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
</style>
