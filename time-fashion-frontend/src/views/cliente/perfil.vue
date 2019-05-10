<template>
  <v-app>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
      class="snackbar"
    >
      <span>Perfil actualizado</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card width="1045">
              <v-card-title primary-title>
                <div>
                  <div class="headline"><strong>Perfil</strong></div>
                  <span>Mantén tu información actualizada para evitar errores en compras y/o envíos</span>
                </div>
              </v-card-title>
              <v-card-actions>
                  <v-container fluid>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader v-text="'Nombres'"></v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-text-field
                          v-model="form.nombres"
                          :rules="rules.required"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader v-text="'Apellidos'"></v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-text-field
                          v-model="form.apellidos"
                          :rules="rules.required"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader v-text="'Fecha de nacimiento'"></v-subheader>
                      </v-flex>
                      <v-flex xs12 sm3 >
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="date"
                              prepend-icon="event"
                              readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            ref="picker"
                            v-model="date"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1930-01-01"
                            @change="save"
                          ></v-date-picker>
                        </v-menu>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Género</v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-select
                        v-model="form.genero"
                        :items="generos"
                        ></v-select>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Correo</v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-text-field
                          v-model="form.correo"
                          :rules="rules.correo"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Contraseña</v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-text-field
                          v-model="form.contrasena"
                          :append-icon="show1 ? 'visibility' : 'visibility_off'"
                          :rules="rules.required"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          counter
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Teléfono</v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-text-field
                          v-model="form.telefono"
                          :rules="rules.required"
                          :mask="phone"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Tipo de documento</v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-select
                          v-model="form.tipodocumento"
                          :items="tipos"
                          :rules="rules.required"
                          required
                        ></v-select>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Documento</v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-text-field
                          v-model="form.documento"
                          :rules="rules.required"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Nacionalidad</v-subheader>
                      </v-flex>
                      <v-flex xs12 sm7>
                        <v-select
                          v-model="form.nacionalidad"
                        ></v-select>
                      </v-flex>
                    </v-layout>
                  </v-container>
              </v-card-actions>
              <v-card-actions>
                <div class="botonConfirmar"><v-btn
                  :disabled="!formIsValid"
                  flat
                  color="black"
                  type="submit"
                >Confirmar
                </v-btn></div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-app>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      nombres: '',
      apellidos: '',
      genero: '',
      contrasena: '',
      correo: '',
      telefono: '',
      tipodocumento: '',
      documento: '',
      nacionalidad: ''
    })
    return {
      phone: 'phone',
      form: Object.assign({}, defaultForm),
      rules: {
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido'],
        required: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      generos: ['Masculino', 'Femenino'],
      show1: false,
      tipos: ['Tarjeta de identidad', 'Cédula de ciudadanía']
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombres &&
        this.form.apellidos &&
        this.form.contrasena &&
        this.form.correo &&
        this.form.telefono &&
        this.form.tipodocumento &&
        this.form.documento
      )
    }
  },
  methods: {
    submit () {
      this.snackbar = true
      this.resetForm()
    },
    save (date) {
      this.$refs.menu.save(date)
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style>
  .botonConfirmar{
  background-color: rgba(206, 98, 252, 0.795);
  margin: auto auto 20px auto;
  transition: all .2s linear
 }
 .botonConfirmar button:not([disabled="disabled"]):hover{
    background-color: rgba(136, 16, 248, 0.795)
 }
</style>
