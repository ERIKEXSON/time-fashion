<template>
  <v-app>
    <nav style="text-align: center; border: #000000 3px solid;margin-bottom: 30px">
      <div style="background-color:#000000;padding: 5px;color: white"><h2>Inventario</h2></div>
      <v-card width= 1045>
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
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <td class="text-xs-left">{{ props.item.cantidadtotal }}</td>
            <td class="text-xs-center">
                <div style="text-align: center; display: inline-block;"></div>
                <div class="btd"><v-btn @click.up="conditions=true">Detalles</v-btn></div>
            </td>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="conditions" width="1085">
        <v-card>
          <v-card-text>
            <nav style="width: 1045px; text-align: center;border:  #000000 3px solid;margin-bottom: 30px">
              <div style="background-color: #000000;padding: 5px;color: white"><h2>Detalles</h2></div>
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
                  :headers="encabezado"
                  :items="contenido"
                  :search="search"
                >
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.codigo }}</td>
                    <td class="text-xs-left">{{ props.item.descripcion }}</td>
                    <td class="text-xs-left">{{ props.item.color }}</td>
                    <td class="text-xs-left">{{ props.item.tallas }}</td>
                    <td class="text-xs-left">{{ props.item.cantidad }}</td>
                    <td class="text-xs-left">{{ props.item.posicion }}</td>
                    <td class="text-xs-left">{{ props.item.precio }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="bt"><v-btn flat @click="conditions=false">Cerrar</v-btn></div>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </nav>
  </v-app>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      codigo: '',
      marca: '',
      color: '',
      tallas: '',
      cantidad: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Código', value: 'codigo' },
        { text: 'Nombre', value: 'name' },
        { text: 'Marca', value: 'marca' },
        { text: 'Cantidad', value: 'cantidadtotal' },
        { text: '' }
      ],
      encabezado: [
        { text: 'Código', value: 'codigo' },
        { text: 'Descripción', value: 'descripcion' },
        { text: 'Color', value: 'color' },
        { text: 'Tallas', value: 'tallas' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Posición', value: 'posicion' },
        { text: 'Precio', value: 'precio' }
      ],
      desserts: [
        {
          codigo: '873642-1',
          name: 'camison',
          marca: 'roballo',
          cantidadtotal: 50
        }
      ],
      contenido: [
        {
          codigo: 'jhass676',
          descripcion: 'camison',
          color: 'Verde',
          tallas: 'S,M',
          cantidad: 15,
          posicion: 'almacen4xdxdxd',
          precio: 50000
        },
        {
          codigo: 'jhass676',
          descripcion: 'camison',
          color: 'Azul',
          tallas: 'S,M',
          cantidad: 15,
          posicion: 'almacen4xdxdxd',
          precio: 50000
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.codigo &&
        this.form.marca &&
        this.form.color &&
        this.form.codigo &&
        this.form.tallas &&
        this.form.cantidad
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style>
.bt{
  margin-left: 10px;
  background-color: rgba(34, 194, 215, 0.61);
  transition: all .2s linear
}
.bt:hover{
    background-color:rgb(145, 45, 45);
}
.btd{
  display: inline-block;
  margin-left: 40px;
   background-color: rgba(34, 194, 215, 0.61);
  transition: all .2s linear
}
.btd:hover:hover{
    background-color:rgb(145, 45, 45);
}
</style>
