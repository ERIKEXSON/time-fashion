<template>
  <v-app>
   <nav class="to">
      <v-card>
  <v-toolbar>
    <v-toolbar-items >
      <v-btn flat>Pendientes de pago </v-btn>
      <v-btn flat>Pendientes de envio</v-btn>
      <v-btn flat>Pendientes de entrega </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </v-card>
  </nav>
  <!--segundo cuadro-->
   <nav class="to">
    <v-card>
      <div>
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
          timeout="2000"
        >
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
                  v-model="form.codigo"
                  :rules="rules.codigo"
                  label="Código"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
  </v-card>
  </nav>
  </v-app>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      nombre: '',
      codigo: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      snackbar: false,
      defaultForm,
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Codigo', value: 'codigo' },
        { text: '' }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.codigo
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
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style>
.to{
 text-align:center;
 border: #000000 2px solid;
 margin: 20px 0 0 0
}
</style>
