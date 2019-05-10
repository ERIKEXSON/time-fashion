<template>
  <v-app>
    <v-text-field
      v-model="password"
      :error-messages="passErrors"
      :counter="10"
      label="Nuevo password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="repeatPassword"
      :error-messages="matchPass"
      :counter="10"
      label="Repetir password"
      required
      @input="$v.repeatPassword.$touch()"
      @blur="$v.repeatPassword.$touch()"
    ></v-text-field>
    <v-btn
      :disabled="$v.$invalid"
      color="success"
      v-text="'dsad'"
    />
  </v-app>
</template>
<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      password: '',
      repeatPassword: ''
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
  computed: {
    passErrors () {
      console.log(this.$v)
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
      return errors
    },
    matchPass () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword && errors.push('diferentes')
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
