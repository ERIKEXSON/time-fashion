<template>
  <v-app>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Agregar empresas</h2>
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
          timeout="2000"
          class="snackbar"
        >
          <span>¡Registro exitoso!</span>
          <v-icon>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card width="1045">
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nombre"
                  :rules="rules.nombre"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nit"
                  :rules="rules.nit"
                  label="Nit"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.correo"
                  :rules="rules.correo"
                  label="Correo"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.telefono"
                  :rules="rules.telefono"
                  label="Teléfono"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <div class="botonCancelar"><v-btn flat @click="resetForm">Cancelar</v-btn></div>
            <div class="botonRegistrar"><v-btn
              :disabled="!formIsValid"
              flat
              color="black"
              type="submit"
            >Registrar
            </v-btn></div>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Empresas</h2>
      </div>
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
          <td class="text-xs-left">{{ props.item.nit }}</td>
          <td class="text-xs-left">{{ props.item.telefono }}</td>
          <td class="text-xs-left">{{ props.item.correo }}</td>
          <div class="botonEmpleados"><v-btn @click="empleados = true">Empleados</v-btn></div>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="empleados" width="1085">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro"><h2>Empleados</h2></div>
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
                <v-data-table
                  :headers="encabezados"
                  :items="contenido"
                  :search="search"
                >
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.apellido }}</td>
                    <td class="text-xs-left">{{ props.item.correo }}</td>
                    <td class="text-xs-left">{{ props.item.direccion }}</td>
                    <td class="text-xs-left">{{ props.item.telefono }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="botonCerrar"><v-btn flat @click="empleados = false">Cerrar</v-btn></div>
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
      nit: '',
      telefono: '',
      correo: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        nit: [val => (val || '').length > 0 || 'Este campo es requerido'],
        telefono: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido']
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      empleados: false,
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'NIT', value: 'nit' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Correo', value: 'correo' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'Totto',
          nit: '87364502-1',
          telefono: '321564651',
          correo: 'jbfjhbue@erjg.com'
        }
      ],
      encabezados: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Teléfono', value: 'telefono' }
      ],
      contenido: [
        {
          name: 'Errik',
          apellido: 'Marto',
          correo: 'asdasda@hola.com',
          direccion: 'asdasdasd123123',
          telefono: '123123123'
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
            this.form.nit &&
            this.form.telefono &&
            this.form.correo
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
    transition: all .2s linear
  }
  .botonCerrar:hover{
    background-color: rgb(145, 45, 45)
  }
  .botonCancelar{
    background-color: rgba(206, 98, 252, 0.795);
    transition: all .2s linear
  }
  .botonCancelar:hover{
      background-color: rgba(136, 16, 248, 0.795)
  }
  .botonRegistrar{
      background-color: rgba(206, 98, 252, 0.795);
      margin-left: 10px;
      transition: all .2s linear
  }
  .botonRegistrar button:not([disabled="disabled"]):hover{
      background-color: rgba(136, 16, 248, 0.795)
  }
  .botonEmpleados{
    display: inline-block;
    margin-right: 40px;
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
  }
  .botonEmpleados:hover{
    background-color: rgb(145, 45, 45)
  }
</style>
