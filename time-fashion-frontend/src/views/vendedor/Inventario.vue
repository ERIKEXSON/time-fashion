<template>
  <v-app>
    <nav class="cuadro">
      <div style="background-color:#000000;padding: 5px;color: white; text-align:center">
        <h2>Agregar inventario</h2>
        <v-snackbar v-model="snackbar" absolute top right color="success" timeout="2000">
          <span>Agregar inventario</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-select v-model="form.producto" :items="tipoproducto" :rules="rules.producto" label="Producto" required
                ></v-select>
              </v-flex>
              <!-- separador-->
              <v-flex sm12>
                <v-card flat>
                  <h1>Detalles del producto</h1>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.cantidad" :rules="rules.cantidad" :mask="numeros" label="Cantidad" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.tallas" :rules="rules.tallas" label="Tallas" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.color" :rules="rules.color" label="Color" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.posicion" :rules="rules.posicion" label="Posicion" required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat @click="resetForm" style="background-color: #00FF08">Cancelar</v-btn>
            <v-btn
              :disabled="!formIsValid"
              flat
              color
              type="submit"
              style="background-color: #23fF48"
            >Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <!--Lista de Productos-->
    <nav class="cuadro2">
      <div style="background-color:#000000;padding: 5px; color: white; text-align:center" >
        <h2>Productos del Inventario</h2>
      </div>
      <v-card width="1050">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search" expand>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <td class="text-xs-left">{{ props.item.valor }}</td>
            <td class="text-xs-left">{{ props.item.cantidadtotal }}</td>
            <td class="text-xs-left"><div class="btd"><v-btn @click="conditions=true">Detalles</v-btn></div></td>
          </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="conditions" width="1085">
        <v-card>
          <v-card-text>
            <nav
              style="width: 1045px; text-align: center;border:  #000000 3px solid;margin-bottom: 30px"
            >
              <div style="background-color: #000000;padding: 5px;color: white">
                <h2>Detalles</h2>
              </div>
              <v-card>
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table :headers="encabezado" :items="contenido" :search="search">
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.codigo }}</td>
                    <td class="text-xs-left">{{ props.item.descripcion }}</td>
                    <td class="text-xs-left">{{ props.item.marca }}</td>
                    <td class="text-xs-left">{{ props.item.color }}</td>
                    <td class="text-xs-left">{{ props.item.tallas }}</td>
                    <td class="text-xs-left">{{ props.item.cantidad }}</td>
                    <td class="text-xs-left">{{ props.item.posicion }}</td>
                    <td class="text-xs-left">{{ props.item.precio }}</td>
                    <td class="text-xs-left">
                      <v-btn fab dark small color="error">
                        <v-icon dark color="black">delete</v-icon>
                      </v-btn>
                      <v-btn fab dark small color="warning">
                        <v-icon dark color="black">edit</v-icon>
                      </v-btn>
                    </td>
                  </template>
                </v-data-table>
              </v-card>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="bt">
                <v-btn flat @click="conditions=false">Cerrar</v-btn>
              </div>
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
      codigo: '',
      nombre: '',
      marca: '',
      precio: '',
      tallas: '',
      cantidad: '',
      posicion: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      numeros: '#########',
      rules: {
        cantidad: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tallas: [val => (val || '').length > 0 || 'Este campo es requerido'],
        color: [val => (val || '').length > 0 || 'Este campo es requerido'],
        posicion: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      tipoproducto: ['Pantalon', 'Camisa', 'Pantaloneta', 'Camisetilla', 'Boxer', 'zapatos', 'accesorios'],
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Código', value: 'codigo' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Marca', value: 'marca' },
        { text: 'Precio', value: 'valor' },
        { text: 'Cantidad', value: 'cantidadtotal' },
        { text: 'Opciones', sortable: false }
      ],
      desserts: [
        {
          codigo: 'ASD812',
          nombre: 'Shorts',
          marca: 'roballo',
          valor: 10000,
          cantidadtotal: 156
        }
      ],
      encabezado: [
        { text: 'Código', value: 'codigo' },
        { text: 'Descripción', value: 'descripción' },
        { text: 'Marca', value: 'marca' },
        { text: 'Color', value: 'color' },
        { text: 'Tallas', value: 'tallas' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Posición', value: 'posicion' },
        { text: 'Precio', value: 'Precio' },
        { text: 'Opciones', sortable: false }
      ],
      contenido: [
        {
          codigo: 'jhass676',
          descripcion: 'camison',
          marca: 'nuevo',
          color: 'Verde',
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
        this.form.color &&
        this.form.tallas &&
        this.form.cantidad &&
        this.form.posicion
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
.bt {
  margin-left: 10px;
  background-color: rgba(34, 194, 215, 0.61);
  transition: all 0.2s linear;
}
.bt:hover {
  background-color: rgb(145, 45, 45);
}
.btd {
  display: inline-block;
  margin-left: 40px;
  background-color: rgba(34, 194, 215, 0.61);
  transition: all 0.2s linear;
}
.btd:hover:hover {
  background-color: rgb(145, 45, 45);
}
.cuadro2{
  margin-top:50px;
}
</style>
