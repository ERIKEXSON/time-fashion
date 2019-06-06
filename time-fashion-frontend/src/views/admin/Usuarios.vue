<template>
  <v-flex xs12>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Agregar usuarios</h2>
        <v-snackbar v-model="snackbar" absolute top right color="success" class="snackbar">
          <span>Registro exitoso</span>
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
                  label="Nombres"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.apellido"
                  :rules="rules.required"
                  label="Apellidos"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.cedula"
                  :rules="rules.required"
                  label="Cédula"
                  :mask="doc"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.email" :rules="rules.correo" label="Correo" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-select
                  v-model="form.rol"
                  :items="rol"
                  :rules="rules.required"
                  label="Rol"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  v-model="form.direcciones"
                  :rules="rules.required"
                  label="Dirección"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.nacionalidad"
                  :rules="rules.required"
                  label="Nacionalidad"
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
            >{{ btnText }}</v-btn>
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
        <v-data-table :headers="headers" :items="usuarios" :search="search">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.apellido }}</td>
            <td class="text-xs-left">{{ props.item.cedula }}</td>
            <td class="text-xs-left">{{ props.item.empresa }}</td>
            <td class="text-xs-left">{{ props.item.rol }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.telefono }}</td>
            <div style="display: inline-block">
              <v-btn @click="editarUsuario(props.item)" fab dark small color="warning">
                <v-icon dark color="white">edit</v-icon>
              </v-btn>
              <v-btn fab dark small color="error" @click="deteleUsuario(props.item)">
                <v-icon dark color="white">delete</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </nav>
  </v-flex>
</template>
<script>
import api from '@/plugins/api'
import { mapState } from 'vuex'
export default {
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      apellido: '',
      cedula: '',
      email: '',
      rol: '',
      direcciones: '',
      nacionalidad: '',
      telefono: '',
      empresa: '',
      password: '12345'
    })
    return {
      editIndex: '',
      btnText: 'Registrar',
      editar: false,
      tel: 'phone',
      doc: '#################',
      e1: 0,
      contacto: false,
      snackbar: false,
      snackbarEditar: false,
      tabs: null,
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [
          val => (val || '').length > 0 || 'Este campo es requerido',
          v => /.+@.+/.test(v) || 'El correo debe ser válido'
        ]
      },
      rol: ['administrador', 'vendedor'],
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Cédula', value: 'cedula' },
        { text: 'Empresa', value: 'empresa' },
        { text: 'Rol', value: 'rol' },
        { text: 'Correo', value: 'email', sortable: false },
        { text: 'Teléfono', value: 'telefono', sortable: false },
        { text: '', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState(['usuarios']),
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.apellido &&
        this.form.cedula &&
        this.form.email &&
        this.form.rol &&
        this.form.nacionalidad &&
        this.form.direcciones &&
        this.form.telefono &&
        this.form.empresa
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
      this.btnText = 'Registrar'
    },
    async register () {
      if (this.btnText === 'Registrar') {
        const { data: user } = await api.post('/user', {
          userNew: {
            nombre: this.lowerCase(this.form.nombre),
            apellido: this.lowerCase(this.form.apellido),
            cedula: this.lowerCase(this.form.cedula),
            direcciones: this.lowerCase(this.form.direcciones),
            telefono: this.lowerCase(this.form.telefono),
            email: this.lowerCase(this.form.email),
            rol: this.lowerCase(this.form.rol),
            empresa: this.lowerCase(this.form.empresa),
            nacionalidad: this.lowerCase(this.form.nacionalidad),
            contraseña: this.form.password
          }
        })
        let clonUsuarios = [...this.usuarios]
        clonUsuarios.push(user)
        this.$store.commit('SET_USUARIOS', clonUsuarios)
        this.snackbar = true
        this.resetForm()
      } else {
        const { data: user } = await api.put(`/user/${this.form.uuid}`, {
          userUpdate: {
            nombre: this.lowerCase(this.form.nombre),
            apellido: this.lowerCase(this.form.apellido),
            cedula: this.lowerCase(this.form.cedula),
            direcciones: this.lowerCase(this.form.direcciones),
            telefono: this.lowerCase(this.form.telefono),
            email: this.lowerCase(this.form.email),
            rol: this.lowerCase(this.form.rol),
            empresa: this.lowerCase(this.form.empresa),
            nacionalidad: this.lowerCase(this.form.nacionalidad)
          }
        })
        let clonUsers = [...this.usuarios]
        clonUsers[this.editIndex] = user
        this.$store.commit('SET_USUARIOS', clonUsers)
        this.resetForm()
      }
    },
    lowerCase (val) {
      return val.toLowerCase()
    },
    async getUsuarios () {
      const { data: usuariosData } = await api.get('/user')
      this.$store.commit('SET_USUARIOS', usuariosData)
    },
    async deteleUsuario (item) {
      try {
        const { data } = await api.delete(`/user/${item.uuid}`)
        let clonUsuarios = [...this.usuarios]
        const index = this.usuarios.indexOf(item)
        clonUsuarios.splice(index, 1)
        this.$store.commit('SET_USUARIOS', clonUsuarios)
      } catch (error) {
        console.error(error)
      }
    },
    editarUsuario (item) {
      this.btnText = 'Actualizar'
      this.editIndex = this.usuarios.indexOf(item)
      this.form = Object.assign({}, item)
    }
  },
  created () {
    this.getUsuarios()
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
<style scoped>
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
.botonContacto:hover {
  background-color: rgb(145, 45, 45);
}
.contornoboton {
  margin: auto;
}
.botonConfirmar {
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
  border-radius: 15px;
}
.botonConfirmar:hover {
  background-color: rgba(136, 16, 248, 0.795);
}
</style>
