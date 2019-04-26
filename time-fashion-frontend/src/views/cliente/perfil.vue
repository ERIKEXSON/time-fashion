<template>
  <v-app>
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
                  <div class="headline">Perfil</div>
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
                          :rules="rules.nombres"
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
                          :rules="rules.apellidos"
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
                            min="1950-01-01"
                            @change="save"
                          ></v-date-picker>
                        </v-menu>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Género</v-subheader>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Contraseña</v-subheader>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Correo</v-subheader>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Teléfono</v-subheader>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Tipo de documento</v-subheader>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12 sm4>
                        <v-subheader>Documento</v-subheader>
                      </v-flex>
                    </v-layout>
                  </v-container>
              </v-card-actions>
              <v-card-actions>
                <div class="botonCancelar"><v-btn flat @click="resetForm">Cancelar</v-btn></div>
                <div class="botonRegistrar"><v-btn
                  :disabled="!formIsValid"
                  flat
                  color="black"
                  type="submit"
                >Registrar
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
      nombres: 'Errik',
      apellidos: 'Mamerto Avellana',
      genero: '',
      contraseña: 'daasdasdasda',
      correo: '',
      telefono: '',
      tipodocumento: '',
      documento: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nombres: [val => (val || '').length > 0 || 'Este campo es requerido'],
        apellidos: [val => (val || '').length > 0 || 'Este campo es requerido'],
        genero: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tipodocumento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        documento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido'],
        telefono: [val => (val || '').length > 0 || 'Este campo es requerido']
      }
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
        this.form.fechanacimiento &&
        this.form.genero &&
        this.form.contraseña &&
        this.form.correo &&
        this.form.celular &&
        this.form.tipodocumento &&
        this.form.documento
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
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
