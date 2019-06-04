<template>
  <v-flex xs12>
    <v-snackbar v-model="snackbar" absolute top right color="success" class="snackbar">
      <span>Contraseña actualizada</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <v-card>
      <v-container>
        <v-layout wrap>
          <v-flex xs0 sm1></v-flex>
          <v-flex xs12 sm3>
            <v-subheader>Contraseña actual</v-subheader>
          </v-flex>
          <v-flex xs12 sm7>
            <v-text-field
              v-model="currentPassword"
              :error-messages="currentPassErrors"
              @input="$v.currentPassword.$touch()"
              @blur="$v.currentPassword.$touch()"
              box
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-flex>
          <v-flex xs0 sm1></v-flex>
          <v-flex xs0 sm1></v-flex>
          <v-flex xs12 sm3>
            <v-subheader>Contraseña nueva</v-subheader>
          </v-flex>
          <v-flex xs12 sm7>
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
          <v-flex xs0 sm1></v-flex>
          <v-flex xs0 sm1></v-flex>
          <v-flex xs12 sm3>
            <v-subheader>Confirmar nueva contraseña</v-subheader>
          </v-flex>
          <v-flex xs12 sm7>
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
          <v-flex xs0 sm1></v-flex>
        </v-layout>
        <v-card-actions>
          <v-btn
            class="boton"
            flat
            :disabled="$v.$invalid"
            v-text="'Cambiar contraseña'"
            @click="cambiarPassword"/>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
import api from '@/plugins/api'
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      snackbar: false,
      password: '',
      repeatPassword: '',
      currentPassword: ''
    }
  },
  validations: {
    currentPassword: {
      required
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    ...mapState(['user']),
    currentPassErrors () {
      const errors = []
      if (!this.$v.currentPassword.$dirty) return errors
      if (!this.$v.currentPassword.required) {
        errors.push('Contraseña requerida')
      }
      return errors
    },
    passErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.minLength) {
        errors.push('Contraseña debe tener mínimo 8 caracteres')
      }
      if (!this.$v.password.required) {
        errors.push('Contraseña requerida')
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
    async cambiarPassword () {
      const { data: res } = await api.put(`/user/updatePassword/${this.user.uuid}`, {
        contrasena: this.currentPassword,
        contrasenaNew: this.password
      })
      if (res.update === false) {
        Swal.fire({
          type: 'error',
          title: 'Usuario/contraseña erróneos',
          text: 'Ingresa bien los datos'
        })
      } else {
        this.snackbar = true
      }
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
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
  .snackbar {
    color: black;
  }
</style>
