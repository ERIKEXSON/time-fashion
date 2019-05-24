<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm md12>
          <v-card class="elevation-12">
            <v-toolbar color="black">
              <div style="width:417.66px; text-align:center">
                <v-toolbar-title style="color:white">Ingresa tu usuario y contraseña</v-toolbar-title>
              </div>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Usuario"
                  type="email"
                  color="black"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Contraseña"
                  id="password"
                  type="password"
                  color="black"
                  v-model="contrasena"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div style="width: 417.66px; text-align:center">
                <v-btn
                :disabled="!formIsValid"
                style="background-color:black; color:white"
                @click="singin"
                >Ingresar</v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import Swal from 'sweetalert2'
import api from '@/plugins/api'
export default {
  data () {
    return {
      email: '',
      contrasena: ''
    }
  },
  methods: {
    async singin () {
      const { data: res } = await api.post('/user/singin', {
        email: this.email,
        contraseña: this.contrasena
      })
      if (!res.login) {
        Swal.fire({
          type: 'error',
          title: 'Usuario/contraseña erróneos',
          text: 'Ingresa bien los datos'
        })
      }
      if (res.user.rol === 'cliente') {
        this.$router.push('cliente')
      }
      if (res.user.rol === 'vendedor') {
        this.$router.push('vendedor')
      }
      if (res.user.rol === 'administrador') {
        this.$router.push('admin')
      }
    }
  },
  computed: {
    formIsValid () {
      return (
        this.email &&
        this.contrasena
      )
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
