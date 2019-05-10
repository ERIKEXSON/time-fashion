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
                <v-text-field v-model="form.currentPassword" required box></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md1></v-flex>
              <v-flex md3>
                <v-subheader>Contraseña nueva</v-subheader>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex md6>
                <v-text-field
                  :error-messages="passErrors"
                  v-model="form.newPassword"
                  :counter="6"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  required
                  box
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md1></v-flex>
              <v-flex md3>
                <v-subheader>Confirmar contraseña nueva</v-subheader>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex md6>
                <v-text-field
                  :error-messages="matchPass"
                  v-model="form.newPasswordConfirmed"
                  @input="$v.repeatPassword.$touch()"
                  @blur="$v.repeatPassword.$touch()"
                  required
                  box
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>
        <v-card-actions>
          <div class="boton">
            <v-btn flat :disabled="!formIsValid" color="black" type="submit">Cambiar contraseña</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-app>
</template>
<script>

import { required, sameAs, minLength } from 'vuelidate/lib/validators'

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
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    submit () {
      this.snackbar = true
      this.resetForm()
    }
  },
  mixins: [validationMixin],
  computed: {
    formIsValid () {
      return (
        this.form.currentPassword &&
        this.form.newPassword &&
        this.form.newPasswordConfirmed
      )
    },
    passErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.minLength) {
        console.log('le')
        errors.push('Name must be at most 10 characters long')
        return errors
      }
      if (!this.$v.password.required) {
        console.log('req')
        errors.push('contraseña requerida')
        return errors
      }
    },
    matchPass () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.$dirty && errors.push('diferentes')
      return errors
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style scoped>
.boton {
  background-color: rgba(206, 98, 252, 0.795);
  margin: auto auto 20px auto;
  transition: all 0.2s linear;
  align-content: center;
}
.boton button:not([disabled="disabled"]):hover {
  background-color: rgba(136, 16, 248, 0.795);
}
</style>
