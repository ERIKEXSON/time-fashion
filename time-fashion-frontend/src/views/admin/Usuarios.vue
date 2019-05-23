<template>
  <v-flex xs12>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Agregar usuarios</h2>
        <v-snackbar v-model="snackbar" absolute top right color="success" class="snackbar">
          <span>¡Registro exitoso!</span>
          <v-icon>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card>
        <v-form ref="form">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.nombre" :rules="rules.required" label="Nombre" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.apellido"
                  :rules="rules.required"
                  label="Apellido"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.documento"
                  :rules="rules.required"
                  label="Cédula"
                  :mask="doc"
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
                <v-select
                  v-model="form.rol"
                  :items="rol"
                  :rules="rules.required"
                  label="Rol"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.direccion"
                  :rules="rules.required"
                  label="Dirección"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.tel"
                  :rules="rules.required"
                  label="Teléfono"
                  :mask="tel"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.empresa"
                  :rules="rules.required"
                  label="Empresa"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn class="botonCancelar" flat @click="resetForm">Cancelar</v-btn>
            <v-btn
              class="botonRegistrar"
              :disabled="!formIsValid"
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
        <h2>Usuarios</h2>
      </div>
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
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.apellido }}</td>
            <td class="text-xs-left">{{ props.item.documento }}</td>
            <td class="text-xs-left">{{ props.item.empresa }}</td>
            <td class="text-xs-left">{{ props.item.rol }}</td>
            <div style="text-align: center; display: inline-block;">
              <v-btn fab dark small color="warning">
                <v-icon dark color="white">edit</v-icon>
              </v-btn>
              <v-btn fab dark small color="error">
                <v-icon dark color="white">delete</v-icon>
              </v-btn>
            </div>
            <div class="botonContacto">
              <v-btn @click="contacto = true">Datos de contacto</v-btn>
            </div>
          </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="contacto" width="1085">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro">
                <h2>Datos de contacto</h2>
              </div>
              <v-card>
                <v-data-table
                  :headers="datosContacto"
                  :items="desserts"
                  :search="search"
                  hide-actions
                >
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.correo }}</td>
                    <td class="text-xs-left">{{ props.item.direccion }}</td>
                    <td class="text-xs-left">{{ props.item.telefono }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="botonCerrar" flat @click="contacto = false">Cerrar</v-btn>
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
      apellido: '',
      documento: '',
      correo: '',
      rol: '',
      direccion: '',
      nacionalidad: 'colombia',
      tel: '',
      empresa: '',
      pass: 'asdasdasd'
    })
    return {
      tel: 'phone',
      doc: '#################',
      e1: 0,
      contacto: false,
      snackbar: false,
      tabs: null,
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [
          val => (val || '').length > 0 || 'Este campo es requerido',
          v => /.+@.+/.test(v) || 'El correo debe ser válido'
        ]
      },
      rol: ['Administrador', 'Vendedor'],
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Cédula', value: 'documento' },
        { text: 'Nacionalidad', value: 'nacionalidad' },
        { text: 'Empresa', value: 'empresa' },
        { text: 'Rol', value: 'rol' },
        { text: '', sortable: false }
      ],
      desserts: [
        {
          nombre: 'Errik',
          apellido: 'Mamerto',
          documento: '123123123',
          correo: 'asdasda@hola.com',
          nacionalidad: 'colombia',
          direccion: 'asdasdasd123123',
          telefono: '123123123',
          empresa: 'adidas',
          rol: 'administrador'
        }
      ],
      datosContacto: [
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Teléfono', value: 'telefono' }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.apellido &&
        this.form.documento &&
        this.form.correo &&
        this.form.rol &&
        this.form.nacionalidad &&
        this.form.direccion &&
        this.form.tel &&
        this.form.empresa
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    async register () {
      console.log(this.lowerCase(this.form.nombre))
      const res = await api.post('/user', {
        userNew: {
          nombre: this.lowerCase(this.form.nombre),
          apellido: this.lowerCase(this.form.apellido),
          cedula: this.lowerCase(this.form.documento),
          telefono: this.lowerCase(this.form.tel),
          email: this.lowerCase(this.form.correo),
          rol: this.lowerCase(this.form.rol),
          empresa: this.lowerCase(this.form.empresa),
          nacionalidad: this.lowerCase(this.form.nacionalidad),
          contraseña: this.form.password
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
.borde {
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
}
.tituloCuadro {
  background-color: #000000;
  padding: 5px;
  color: white;
}
.botonCancelar {
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
}
.botonCancelar:hover {
  background-color: rgba(136, 16, 248, 0.795);
}
.botonRegistrar {
  background-color: rgba(206, 98, 252, 0.795);
  margin-left: 10px;
  transition: all 0.2s linear;
}
.botonRegistrar button:not([disabled="disabled"]):hover {
  background-color: rgba(136, 16, 248, 0.795);
}
.snackbar {
  color: black;
}
.botonContacto {
  display: inline-block;
  background-color: rgba(34, 194, 215, 0.61);
  transition: all 0.2s linear;
}
.botonCompras {
  display: inline-block;
  margin-left: 20px;
  background-color: rgba(34, 194, 215, 0.61);
  transition: all 0.2s linear;
}
.botonContacto:hover {
  background-color: rgb(145, 45, 45);
}
.botonCompras:hover {
  background-color: rgb(145, 45, 45);
}
.botonSeguirPedido {
  display: inline-block;
  background-color: rgba(34, 194, 215, 0.61);
  transition: all 0.2s linear;
}
.botonSeguirPedido:hover {
  background-color: rgb(145, 45, 45);
}
</style>
