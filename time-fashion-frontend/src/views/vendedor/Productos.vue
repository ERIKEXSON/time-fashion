<template>
  <v-app>
    <nav class="cuadro">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Agregar producto</h2>
        <v-snackbar v-model="snackbar" absolute top right color="success" timeout="2000">
          <span>Producto agregado</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.nombre" :rules="rules.nombre" label="Descripción" required ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.codigo" :rules="rules.codigo" label="Código" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.precio" :rules="rules.precio" label="Precio" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.marca" :rules="rules.marca" label="Marca" required></v-text-field>
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
              style="background-color: #00FF08"
            >Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <!--Lista de Productos-->
    <nav class="cuadro2">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Productos</h2>
      </div>
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
        <v-data-table :headers="headers" :items="desserts" :search="search" expand>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <td class="text-xs-left">{{ props.item.valor }}</td>
            <td class="text-xs-left"><div class="btd"><v-btn @click="conditions=true">Imágenes</v-btn></div></td>
          </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="conditions" width="1085">
         <v-card>
            <v-card-text>
                <nav>
                <div class="tituloCuadro"><h2>Imagenes de muestra</h2></div>
                <v-img :src="img" class="imagen"></v-img>
                <v-img :src="img" class="imagen"></v-img>
                <v-img :src="img" class="imagen"></v-img>
                <v-img :src="img" class="imagen"></v-img>
                </nav>
                <v-card-actions>
                <v-spacer></v-spacer>
                <div class="botonCerrar"><v-btn flat @click="conditions = false">Cerrar</v-btn></div>
                </v-card-actions>
            </v-card-text>
            </v-card>
      </v-dialog>
    </nav>
  </v-app>
</template>
<script>
import img from '@/assets/busos.png'
export default {
  data () {
    const defaultForm = Object.freeze({
      codigo: '',
      nombre: '',
      marca: '',
      precio: ''
    })
    return {
      img,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo: [val => (val || '').length > 0 || 'Este campo es requerido'],
        precio: [val => (val || '').length > 0 || 'Este campo es requerido'],
        marca: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Código', value: 'codigo' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Marca', value: 'marca' },
        { text: 'Precio', value: 'valor' }
      ],
      desserts: [
        {
          codigo: 'ASD812',
          nombre: 'Shorts',
          marca: 'roballo',
          valor: 10000
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.codigo &&
        this.form.precio &&
        this.form.marca
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
.cuadro {
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
}
.cuadro2 {
  border: #000000 3px solid;
  width: fit-content;
  text-align: center;
  margin-top: 50px;
}
.detalle {
  margin-left: 40px;
  text-align: center;
}
.tituloCuadro{
  text-align: center;
   background-color:#000000;
   padding: 5px;
   color: white
 }
.imagen{
  margin:20px 10px;
  width: 239px;
  height: 349px;
  display:inline-block
}
</style>
