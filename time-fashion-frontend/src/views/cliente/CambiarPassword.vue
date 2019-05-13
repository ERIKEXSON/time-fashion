<template>
  <v-app>
    <v-card width="845">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex md1></v-flex>
          <v-flex md3>
            <v-subheader>Contraseña actual</v-subheader>
          </v-flex>
          <v-flex md7>
            <v-text-field
              v-model="currentPassword"
              box
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md1></v-flex>
          <v-flex md3>
            <v-subheader>Contraseña nueva</v-subheader>
          </v-flex>
          <v-flex md7>
            <v-text-field
              v-model="password"
              :error-messages="passErrors"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              box
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md1></v-flex>
          <v-flex md3>
            <v-subheader>Confirmar nueva contraseña</v-subheader>
          </v-flex>
          <v-flex md7>
            <v-text-field
              v-model="repeatPassword"
              :error-messages="matchPass"
              @input="$v.repeatPassword.$touch()"
              @blur="$v.repeatPassword.$touch()"
              box
              :append-icon="show3 ? 'visibility' : 'visibility_off'"
              :type="show3 ? 'text' : 'password'"
              @click:append="show3 = !show3"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <div class="boton">
            <v-btn
              flat
              :disabled="$v.$invalid"
              v-text="'Cambiar contraseña'"
              @click="submit"
            />
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-app>
</template>
<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      password: '',
      repeatPassword: '',
      currentPassword: ''
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(8)
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
        errors.push('Contraseña debe tener mínimo 8 caracteres')
        return errors
      }
      if (!this.$v.password.required) {
        errors.push('Contraseña requerida')
        return errors
      }
      return errors
    },
    matchPass () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword && errors.push('Contraseñas no coinciden')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$reset()
      this.currentPassword = null
      this.password = null
      this.repeatPassword = null
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style scoped>
.boton {
  width: fit-content;
  background-color: rgba(206, 98, 252, 0.795);
  color: black;
  margin: auto;
  transition: all 0.2s linear;
  align-content: center;
  border-radius: 15px
}
.boton button:not([disabled="disabled"]):hover {
  background-color: rgba(136, 16, 248, 0.795);
}
</style>
