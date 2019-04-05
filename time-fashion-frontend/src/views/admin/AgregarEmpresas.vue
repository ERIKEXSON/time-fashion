<template>
  <v-app>
    <nav style="text-align:center; border: #000000 3px solid">
      <div style="background-color:#000000;padding: 5px;color: white">
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
      defaultForm
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
 .botonRegistrar:hover{
    background-color: rgba(136, 16, 248, 0.795)
 }
 .snackbar{
   color: black
 }
</style>
