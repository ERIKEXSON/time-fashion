<template>
  <v-layout justify-center>
    <div style="width:417.66px; text-align:center">
      <v-toolbar-title >Crea cuenta nueva</v-toolbar-title>
      <v-card>
        <v-card-text>
          <v-text-field
            ref="nombre"
            v-model="nombre"
            :rules="[() => !!nombre || 'Este campo es requerido']"
            :error-messages="errorMessages"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            ref="apellido"
            v-model="apellido"
            :rules="[() => !!apellido || 'Este campo es requerido']"
            label="Apellido"
            required
          ></v-text-field>
          <v-text-field
            ref="cedula"
            v-model="cedula"
            :rules="[() => !!cedula || 'Este campo es requerido']"
            label="Cedula"
            :mask="ced"
            required
          ></v-text-field>
          <v-text-field
            ref="nacionalidad"
            v-model="nacionalidad"
            :rules="[() => !!nacionalidad || 'Este campo es requerido']"
            label="nacionalidad"
            required
          ></v-text-field>
          <v-text-field
            ref="telefono"
            v-model="telefono"
            :rules="[() => !!telefono || 'Este campo es requerido']"
            label="Telefono"
            :mask="tel"
            required
          ></v-text-field>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!email, rules.required, rules.email || 'Este campo es requerido']"
            label="Dirección Email"
            required
          ></v-text-field>
          <v-text-field
            ref="contraseña"
            v-model="contrasena"
            :rules="[() => !!contrasena || 'Este campo es requerido']"
            label="Contraseña"
            required
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn flat to="/">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  class="my-0"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="300">
              <template v-slot:activator="{ on }">
                <v-btn
                  style="margin-left: 150px"
                  color="primary"
                  v-on="on"
                  :disabled="!formIsValid"
                  @click="register">Registrarse</v-btn>
              </template>
              <v-card>
                <v-card-text class="text-xs-center">
                  <img src="@/assets/favicon.png" width="100px" alt=""><v-spacer></v-spacer>
                  Tu cuenta a sido creada exitosamente<v-spacer></v-spacer>
                  Entra y conoce nuestros productos
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat @click="dialog = false" to="/">Aceptar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-card-actions>
      </v-card>
    </div>
  </v-layout>
</template>
<script>
import Swal from 'sweetalert2'
import api from '@/plugins/api'
export default {
  data () {
    return {
      nombre: '',
      apellido: '',
      cedula: '',
      nacionalidad: '',
      telefono: '',
      contrasena: '',
      email: '',
      ced: '##########',
      tel: '##########',
      show1: false,
      dialog: false,
      email: '',
      rules: {
        required: value => !!value || 'Este campo es requerido.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'E-mail incorrecto.'
        }
      }
    }
  },
  
  computed: {
    formIsValid () {
      return (
        this.nombre &&
        this.apellido &&
        this.cedula &&
        this.nacionalidad &&
        this.telefono &&
        this.contrasena &&
        this.email
      )
    }
  },
  methods: {
    async register () {
      const res = await api.post('/user', {
        userNew: {
          nombre: this.nombre,
          apellido: this.apellido,
          cedula: this.cedula,
          nacionalidad: this.nacionalidad,
          telefono: this.telefono,
          contraseña: this.contrasena,
          email: this.email
        }
      })
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
