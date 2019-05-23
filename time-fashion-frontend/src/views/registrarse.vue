<template>
  <v-layout justify-center>
    <div style="width:417.66px; text-align:center">
      <v-toolbar-title >Crea cuenta nueva</v-toolbar-title>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="nombre"
            v-model="nombre"
            :rules="[() => !!nombre || 'This field is required']"
            :error-messages="errorMessages"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            ref="apellido"
            v-model="apellido"
            :rules="[() => !!apellido || 'This field is required']"
            label="Apellido"
            required
          ></v-text-field>
          <v-text-field
            ref="cedula"
            v-model="cedula"
            :rules="[() => !!cedula || 'This field is required', addressCheck]"
            label="Cedula"
            required
          ></v-text-field>
          <v-text-field
            ref="nacionalidad"
            v-model="nacionalidad"
            :rules="[() => !!nacionalidad || 'This field is required']"
            label="nacionalidad"
            required
          ></v-text-field>
          <v-text-field
            ref="telefono"
            v-model="telefono"
            :rules="[() => !!telefono || 'This field is required']"
            label="Telefono"
            required
          ></v-text-field>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            label="Dirección Email"
            required
          ></v-text-field>
          <v-text-field
            ref="contraseña"
            v-model="contrasena"
            :rules="[() => !!contrasena || 'This field is required']"
            label="Contraseña"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
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
          <v-btn color="primary" flat @click="register">Registrarse</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-layout>
</template>
<script>
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
      email: ''
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
