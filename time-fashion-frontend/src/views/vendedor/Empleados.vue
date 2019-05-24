<template>
  <v-flex xs12>
    <nav class="cde">
      <div class="cdte">
        <h2>Agregar empleado</h2>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Empleado agregado</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card flat>
        <v-form ref="form">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nombre"
                  :rules="rules.requerido"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.apellido"
                  :rules="rules.requerido"
                  label="Apellido"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="form.correo" :rules="rules.correo" label="Correo" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nacionalidad"
                  :rules="rules.requerido"
                  label="nacionalidad"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.telefono"
                  :rules="rules.requerido"
                  label="Teléfono"
                  required
                  :mask="numeros"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.documento"
                  :rules="rules.requerido"
                  label="Cedula de ciudadania"
                  required
                  :mask="docu"
                  counter
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat @click="resetForm" class="cdbt">Cancelar</v-btn>
            <v-btn
              :disabled="!formIsValid"
              flat
              color
              class="cdbt"
              @click="agregar"
            >Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <!--Lista de empleados-->
    <nav class="cde">
      <div class="cdte">
        <h2>Empleados</h2>
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
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.apellido }}</td>
            <td class="text-xs-left">{{ props.item.correo }}</td>
            <td class="text-xs-left">{{ props.item.nacionalidad }}</td>
            <td class="text-xs-left">{{ props.item.telefono }}</td>
            <td class="text-xs-left">{{ props.item.documento }}</td>
            <td class="text-xs-left">
              <v-btn fab small color="error">
                <v-icon color="black">delete</v-icon>
              </v-btn>
              <v-btn fab small color="warning">
                <v-icon color="black">edit</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
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
      correo: '',
      nacionalidad: '',
      telefono: '',
      documento: '',
      contrasena: '12345',
      rol: 'vendedor'
    })
    return {
      numeros: '###-###-####',
      docu: '##########',
      show1: false,
      form: Object.assign({}, defaultForm),
      rules: {
        requerido: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [
          val => (val || '').length > 0 || 'Este campo es requerido',
          v => /.+@.+/.test(v) || 'El correo debe ser válido'
        ]
      },
      tipos: ['Tarjeta de identidad', 'Cédula de Ciudadania', 'Otro'],
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Correo', value: 'correo' },
        { text: 'Nacionalidad', value: 'nacionalidad' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Documento', value: 'documento' },
        { text: 'Acciones', sortable: false }
      ],
      desserts: [
        {
          nombre: '',
          apellido: '',
          correo: '',
          nacionalidad: '',
          telefono: '',
          documento: ''
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.apellido &&
        this.form.correo &&
        this.form.nacionalidad &&
        this.form.telefono &&
        this.form.documento
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    async agregar () {
      const res = await api.post('/user', {
        userNew: {
          nombre: this.lowerCase(this.form.nombre),
          apellido: this.lowerCase(this.form.apellido),
          email: this.lowerCase(this.form.correo),
          nacionalidad: this.lowerCase(this.form.nacionalidad),
          telefono: this.lowerCase(this.form.telefono),
          cedula: this.lowerCase(this.form.documento),
          contraseña: this.form.contrasena,
          rol: this.lowerCase(this.form.rol)
        }
      })
      this.snackbar = true
      this.resetForm()
    },
    // async update () {
    //   const res = await api.put('/user/f99a7b43-705c-4b0e-8489-338ffb202f7f', {
    //     userUpdate: {
    //       nombre: this.form.nombre,
    //       apellido: this.form.apellidos,
    //       telefono: this.form.telefono,
    //       email: this.form.correo,
    //       nacionalidad: this.form.nacionalidad,
    //       cedula: this.form.documento,
    //       contraseña: this.form.contrasena
    //     }
    //   })
    //   this.snackbar = true
    // },
    lowerCase (val) {
      return val.toLowerCase()
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style scoped>
.cde{
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
  border-radius:5px;
}
.cdte{
  background-color:#000000;
  padding: 2px;
  color: white;
  border-radius: 1px
}
.cdbt{
  background-color: rgba(206, 98, 252, 0.795);
  border-radius: 15px;
  transition: all 0.2s linear;
  text-align: center;
}
.cdbt:hover{
  background-color: rgba(136, 16, 248, 0.795);
  border-radius:15px;
  }
</style>
