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
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <td class="text-xs-center">
                <div style="text-align: center; display: inline-block;">
                    <v-btn fab dark small color="error">
                    <v-icon dark color="white">delete</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="warning">
                    <v-icon dark color="white">edit</v-icon>
                    </v-btn>
                </div>
                <div class="btd"><v-btn @click.up="conditions=true">Detalles</v-btn></div>
            </td>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="conditions" width="1085">
        <v-card>
          <v-card-text>
            <nav style="width: 1045px; text-align: center; border:  #000000 3px solid;margin-bottom: 30px">
              <div style="background-color: #000000;padding: 5px;color: white">
                <h2>Agregar detalle</h2>
                <v-snackbar
                  v-model="snackbar"
                  absolute
                  top
                  right
                  color="success"
                  timeout="2000"
                >
                  <span>Producto agregado</span>
                  <v-icon dark>check_circle</v-icon>
                </v-snackbar>
              </div>
              <v-card flat>
                <v-form ref="form" @submit.prevent="submit">
                  <v-container grid-list-xl fluid>
                    <v-layout wrap>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="form.color1"
                          :rules="rules.color1"
                          label="Color"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="form.codigo1"
                          :rules="rules.codigo1"
                          label="Código"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="form.tallas1"
                          :rules="rules.tallas1"
                          label="Tallas"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="form.cantidad1"
                          :rules="rules.cantidad1"
                          label="Cantidad"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <v-card-actions>
                    <div class="bt"><v-btn flat @click="resetForm">Cancelar</v-btn></div>
                    <div class="bt"><v-btn
                      :disabled="!formIsValid"
                      flat
                      color="primary"
                      type="submit"
                    >Agregar</v-btn></div>
                  </v-card-actions>
                </v-form>
              </v-card>
            </nav>
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
                    <td class="text-xs-left">{{ props.item.color1 }}</td>
                    <td class="text-xs-left">{{ props.item.codigo1 }}</td>
                    <td class="text-xs-left">{{ props.item.tallas1 }}</td>
                    <td class="text-xs-left">{{ props.item.cantidad1 }}</td>
                    <td class="text-xs-center">
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
      color1: '',
      codigo1: '',
      tallas1: '',
      cantidad1: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo: [val => (val || '').length > 0 || 'Este campo es requerido'],
        marca: [val => (val || '').length > 0 || 'Este campo es requerido'],
        color1: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo1: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tallas1: [val => (val || '').length > 0 || 'Este campo es requerido'],
        cantidad1: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Código', value: 'codigo' },
        { text: 'Marca', value: 'marca' },
        { text: '' }
      ],
      encabezado: [
        { text: 'Color', value: 'color1' },
        { text: 'Código', value: 'codigo1' },
        { text: 'Tallas', value: 'tallas1' },
        { text: 'Cantidad', value: 'cantidad1' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'camison',
          codigo: '87364502-1',
          marca: 'roballoasdasdasdasd'
        }
      ],
      contenido: [
        {
          color: 'VeDA',
          tallas: 'S, Mrde',
          codigo: 'AS981, XL',
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
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.codigo &&
        this.form.marca &&
        this.form.color1 &&
        this.form.codigo1 &&
        this.form.tallas1 &&
        this.form.cantidad1
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
