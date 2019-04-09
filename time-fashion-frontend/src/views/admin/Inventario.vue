<template>
  <v-app>
    <nav style="text-align:center;border: #000000 3px solid">
      <div style="background-color:#000000;padding: 5px;color: white"><h2>Inventario</h2></div>
      <v-card width="1045">
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
        :items="desserts"
        :search="search"
      >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.codigo }}</td>
          <td class="text-xs-left">{{ props.item.marca }}</td>
          <div class="botonDetalles"><v-btn @click="detalles = true">Detalles</v-btn></div>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="detalles" width="1085">
        <v-card>
          <v-card-text>
            <nav style="border: #000000 3px solid">
              <div style="background-color:#000000;padding: 5px;color: white"><h2>Detalles</h2></div>
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
                  :headers="encabezados"
                  :items="contenido"
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
            </nav>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="botonCerrar"><v-btn flat @click="detalles = false">Cerrar</v-btn></div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </nav>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      detalles: false,
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Código', value: 'codigo' },
        { text: 'Marca', value: 'marca' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'camison',
          codigo: '87364502-1',
          marca: 'roballo'
        }
      ],
      encabezados: [
        { text: 'Color', value: 'color' },
        { text: 'Código', value: 'codigo' },
        { text: 'Tallas', value: 'tallas' },
        { text: 'Cantidad', value: 'cantidad' }
      ],
      contenido: [
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
<style>
  .botonCerrar{
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
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
