<template>
  <v-flex xs12>
    <nav class="cuadro2">
      <div class="cuadro22">
        <h2>Agregar inventario</h2>
        <v-snackbar v-model="snackbar" absolute top right color="success" >
          <span>Agregar inventario</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-select v-model="form.producto" :items="tipoproducto" :rules="rules.requerido" label="Producto" required
                ></v-select>
              </v-flex>
              <!-- separador-->
              <v-flex sm12>
                <v-card flat>
                  <h1>Detalles del producto</h1>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.cantidad" :rules="rules.requerido" :mask="numeros" label="Cantidad" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.tallas" :rules="rules.requerido" label="Tallas" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.color" :rules="rules.requerido" label="Color" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.posicion" :rules="rules.requerido" label="Proveedor" required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat @click="resetForm" class="bt" >Cancelar</v-btn>
            <v-btn
              :disabled="!formIsValid"
              flat
              color
              type="submit"
              class="bt"
              @click="agrep"
            >Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <!--Lista de Productos-->
    <nav class="cuadro2">
      <div class="cuadro22" >
        <h2>Productos del Inventario</h2>
      </div>
      <v-card >
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
      <v-dialog v-model="conditions">
        <v-card>
          <v-card-text>
            <nav class="cdc2">
              <div class="cdc22">
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
  </v-flex>
</template>
<script>

import api from '@/plugins/api'
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
        requerido: [val => (val || '').length > 0 || 'Este campo es requerido']
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
        { text: 'Proveedor', value: 'posicion' },
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
        this.form.posicion &&
        this.form.producto
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
    },
    async agrep () {
      const res = await api.post('/inventories', {
        inventoriesNew: {
          cantidad: this.lowerCase(this.form.cantidad)
        }
      })
      this.snackbar = true
      this.resetForm()
    },
    lowerCase (val) {
      return val.toLowerCase()
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style>
.cdc2{
  text-align: center;
  border:  #000000 3px solid;
  margin-bottom: 30px
}
.cuadro22{
  background-color:#000000;
  padding: 5px;
  color: white;
   text-align:center
}
.bt {
  margin-left: 10px;
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
}
.bt:hover{
  background-color: rgba(136, 16, 248, 0.795);
}
.btd {
  display: inline-block;
  margin-left: 40px;
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
}
.btd:hover:hover {
  background-color: rgba(136, 16, 248, 0.795);
}
.cuadro2{
  margin-top:20px;
  border: #000000 3px solid;
  border-radius:5px;
}
.cdc22{
  background-color: #000000;
  padding: 5px;
  color: white
}
</style>
