<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs6 sm6 md12>
                    <v-card class="elevation-12">
                        <v-toolbar color="black">
                            <div style="width:417.66px; text-align:center">
                                <v-toolbar-title style="color:white">Crea cuenta nueva</v-toolbar-title>
                            </div>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field name="login" label="Nombre" type="text" color="black" v-model="nombre"></v-text-field>
                                <v-text-field name="login" label="Apellido" type="text" color="black" v-model="apellido"></v-text-field>
                                <v-text-field name="login" label="Cedula" type="text" color="black" v-model="cedula"></v-text-field>
                                <v-text-field name="login" label="Nacionalidad" type="text" color="black" v-model="nacionalidad"></v-text-field>
                                <v-text-field name="login" label="Telefono" type="text" color="black" v-model="telefono"></v-text-field>
                                <v-text-field name="login" label="Dirección de Email" type="text" color="black"></v-text-field>
                                <v-text-field name="login" label="Confirmar Email" type="text" color="black" v-model="email"></v-text-field>
                                <v-text-field name="password" label="Contraseña" id="password" type="password" color="black"></v-text-field>
                                <v-text-field name="password" label="Confirmar Contraseña" id="password" type="password" color="black" v-model="contrasena"></v-text-field>
                            </v-form>
                        </v-card-text>
                      <v-card-actions>
                            <div style="width: 417.66px; text-align:center">
                                <v-btn style="background-color:black; color:white" @click="register">Registrarse</v-btn>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
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
  rules: {
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido'],
        required: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
