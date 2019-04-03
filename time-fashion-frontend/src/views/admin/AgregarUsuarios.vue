<template>
    <nav style="text-align:center; border: #000000 3px solid">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Agregar usuarios</h2>
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
          timeout="2000"
        >
          <span>¡Registro exitoso!</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card flat>
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
                  v-model="form.apellido"
                  :rules="rules.apellido"
                  label="Apellido"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.documento"
                  :rules="rules.documento"
                  label="Documento"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  v-model="form.tipodocumento"
                  :items="tipos"
                  :rules="rules.tipodocumento"
                  label="Tipo de documento"
                  required
                ></v-select>
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
                  v-model="form.contraseña"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="rules.contraseña"
                  :type="show1 ? 'text' : 'password'"
                  label="Contraseña"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.direccion"
                  :rules="rules.direccion"
                  label="Dirección"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.tel"
                  :rules="rules.tel"
                  label="Teléfono"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat @click="resetForm" outline>Cancelar</v-btn>
            <v-btn
              :disabled="!formIsValid"
              flat
              color="primary"
              type="submit"
              outline
            >Registrar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      apellido: '',
      documento: '',
      tipodocumento: '',
      correo: '',
      contraseña: '',
      direccion: '',
      tel: ''
    })
    return {
      show1: false,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        apellido: [val => (val || '').length > 0 || 'Este campo es requerido'],
        documento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tipodocumento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido'],
        contraseña: [val => (val || '').length > 0 || 'Este campo es requerido'],
        direccion: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tel: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      tipos: ['Tarjeta de identidad', 'Cédula de ciudadanía'],
      conditions: false,
      snackbar: false,
      defaultForm
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.apellido &&
        this.form.documento &&
        this.form.tipodocumento &&
        this.form.correo &&
        this.form.contraseña &&
        this.form.direccion &&
        this.form.tel
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
