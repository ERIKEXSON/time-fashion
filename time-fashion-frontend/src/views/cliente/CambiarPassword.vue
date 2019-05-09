<template>
  <v-app>
    <v-form ref="form" @submit.prevent="submit">
      <v-card width="945">
        <v-card-actions>
          <v-container>
            <v-layout row>
              <v-flex md1></v-flex>
              <v-flex md3>
                <v-subheader>Contraseña actual</v-subheader>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex md6>
                <v-text-field v-model="form.currentPassword" :rules="rules.required" required box></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md1></v-flex>
              <v-flex md3>
                <v-subheader>Contraseña nueva</v-subheader>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex md6>
                <v-text-field v-model="form.newPassword" required :rules="confirmada" box></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md1></v-flex>
              <v-flex md3>
                <v-subheader>Confirmar contraseña nueva</v-subheader>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex md6>
                <v-text-field v-model="form.newPasswordConfirmed" required box :rules="confirmada"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>
        <v-card-actions>
          <div class="boton">
            <v-btn flat>Cambiar contraseña</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-app>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmed: ''
    })
    return {
      prueba: false,
      form: Object.assign({}, defaultForm),
      rules: {
        required: [
          val => (val || '').length > 0 || 'Este campo es requerido',
          val =>
            (val || '').length > 7 ||
            'Ingrese contraseña con 8 o mas caracteres'
        ]
      }
    }
  },
  methods: {
    submit () {
      this.snackbar = true
      this.resetForm()
    },
    confirmarNuevaPassword () {
      if (this.form.newPasswordConfirmed === this.form.newPassword) {
        return this.newPasswordConfirmed
      } else {
        this.newPasswordConfirmed = ''
        return this.newPasswordConfirmed
      }
    }
  },
  computed: {
    confirmada () {
      return [
        () =>
          this.form.newPassword === this.form.newPasswordConfirmed ||
          'Contraseñas no coincide',
        v => !!v || 'Confirmation E-mail is required'
      ]
    },
    formIsValid () {
      return (
        this.form.currentPassword &&
        this.form.newPassword &&
        this.form.newPasswordConfirmed
      )
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style scoped>
.boton {
  margin: auto;
  align-content: center;
}
</style>
