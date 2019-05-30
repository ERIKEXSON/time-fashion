<template>
  <v-flex xs12>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Agregar empresas</h2>
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
          class="snackbar"
        >
          <span>¡Registro exitoso!</span>
          <v-icon>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card>
        <v-form ref="form">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nombre"
                  :rules="rules.required"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nit"
                  :rules="rules.required"
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
                  :rules="rules.required"
                  label="Teléfono"
                  :mask="tel"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn class="botonCancelar" flat @click="resetForm">Cancelar</v-btn>
            <v-btn
              :disabled="!formIsValid"
              class="botonRegistrar"
              flat
              color="black"
              @click="register"
            >Registrar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Empresas</h2>
      </div>
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
        :items="desserts"
        :search="search"
        >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.nit }}</td>
          <td class="text-xs-left">{{ props.item.telefono }}</td>
          <td class="text-xs-left">{{ props.item.correo }}</td>
          <div style="text-align: center; display: inline-block;">
            <v-btn @click="editar = true" fab dark small color="warning">
              <v-icon dark color="white">edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="error">
              <v-icon dark color="white">delete</v-icon>
            </v-btn>
          </div>
          <div class="botonEmpleados"><v-btn @click="empleados = true">Empleados</v-btn></div>
        </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="editar">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro">
                <h2>Editar usuario</h2>
              </div>
              <v-container grid-list-xl fluid>
                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.nombre"
                      label="Nombre"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.nit"
                      label="Nit"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.telefono"
                      label="Teléfono"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.correo"
                      label="Correo"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <div class="contornoboton">
                <v-btn
                  class="botonConfirmar"
                  flat
                  color="black"
                >Actualizar</v-btn>
              </div>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="botonCerrar" flat @click="editar = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="editarEmpleados">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro">
                <h2>Editar usuario</h2>
              </div>
              <v-container grid-list-xl fluid>
                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.nombre"
                      label="Nombre"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.apellido"
                      label="Apellido"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.correo"
                      label="Correo"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.direccion"
                      label="Dirección"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="form.telefono"
                      label="Teléfono"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <div class="contornoboton">
                <v-btn
                  class="botonConfirmar"
                  flat
                  color="black"
                >Actualizar</v-btn>
              </div>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="botonCerrar" flat @click="editarEmpleados = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="empleados">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro"><h2>Empleados</h2></div>
              <v-card>
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
                    <div>
                      <v-btn @click="editarEmpleados = true" fab dark small color="warning">
                        <v-icon dark color="white">edit</v-icon>
                      </v-btn>
                      <v-btn fab dark small color="error">
                        <v-icon dark color="white">delete</v-icon>
                      </v-btn>
                    </div>
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
  </v-flex>
</template>
<script>
import api from '@/plugins/api'
export default {
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      nit: '',
      telefono: '',
      correo: ''
    })
    return {
      editarEmpleados: false,
      editar: false,
      tel: 'phone',
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido'],
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
        { text: 'Opciones', sortable: false }
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
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Opciones', sortable: false }
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
    async register () {
      const res = await api.post('/company', {
        companyNew: {
          nombre: this.lowerCase(this.form.nombre),
          nit: this.lowerCase(this.form.nit),
          correo: this.lowerCase(this.form.correo),
          telefono: this.lowerCase(this.form.telefono)
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
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
<style>
.borde{
    text-align:center;
    border: #000000 3px solid;
    margin-bottom: 30px;
    border-radius: 5px
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
    transition: all .2s linear;
    border-radius: 15px
  }
  .botonCancelar:hover{
      background-color: rgba(136, 16, 248, 0.795)
  }
  .botonRegistrar{
    background-color: rgba(206, 98, 252, 0.795);
    transition: all .2s linear;
    border-radius: 15px
  }
  .botonRegistrar button:not([disabled="disabled"]):hover{
    background-color: rgba(136, 16, 248, 0.795)
  }
  .botonEmpleados{
    display: inline-block;
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
  }
  .botonEmpleados:hover{
    background-color: rgb(145, 45, 45)
  }
</style>
