<template>
  <v-layout justify-center>
        <div style="width:417.66px; text-align:center">
            <v-toolbar-title >Crea cuenta nueva</v-toolbar-title>
            <v-flex>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="nombre"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            ref="address"
            v-model="apellido"
            :rules="[
              () => !!address || 'This field is required',
              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
            label="Apellido"
            required
          ></v-text-field>
          <v-text-field
            ref="city"
            v-model="cedula"
            :rules="[() => !!city || 'This field is required', addressCheck]"
            label="Cedula"
            required
          ></v-text-field>
          <v-text-field
            ref="country"
            v-model="nacionalidad"
            :rules="[() => !!country || 'This field is required']"
            label="nacionalidad"
            required
          ></v-text-field>
          <v-text-field
            ref="zip"
            v-model="telefono"
            :rules="[() => !!zip || 'This field is required']"
            label="Telefono"
            required
          ></v-text-field>
          <v-text-field
            ref="state"
            v-model="email"
            :rules="[() => !!state || 'This field is required']"
            label="Dirección Email"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="contrasena"
            :rules="[() => !!password || 'This field is required']"
            label="Contraseña"
            required
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
          <v-btn color="primary" flat @click="register">Registrarse</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
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
