<template>
  <v-app>
    <nav class="borde">
      <div class="tituloCuadro"><h2>Productos</h2></div>
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
            <td class="text-xs-left">{{ props.item.empresa }}</td>
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
        { text: 'Marca', value: 'marca' },
        { text: 'Empresa', value: 'empresa' }
      ],
      desserts: [
        {
          name: 'Shorts',
          codigo: 'ASD812A',
          precio: 1000000,
          marca: 'roballo',
          empresa: 'asdasd'
        }
      ]
    }
  },
  created () {
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
