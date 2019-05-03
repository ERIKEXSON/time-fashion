<template>
  <v-app>
    <v-form ref="form" @submit.prevent="submit">
      <v-card width="945">
        <v-card-title primary-title>
          <div>
            <div class="headline"><strong>Mis direcciones de envío</strong></div>
            <span>Mantén tu información actualizada para evitar errores de envíos</span>
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
                  disabled
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
                  disabled
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm4>
                <v-subheader v-text="'País'"></v-subheader>
              </v-flex>
              <v-flex xs12 sm7>
                <v-select
                  v-model="form.pais"
                  :items="paises"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex sm4>
                <v-subheader v-text="'Dirección'"></v-subheader>
              </v-flex>
              <v-flex sm7>
                <v-text-field
                  v-model="form.direccion"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex sm4>
                <v-subheader v-text="'Estado/Provincia/Región'"></v-subheader>
              </v-flex>
              <v-flex sm7>
                <v-select
                  v-model="form.departamento"
                  :items="departamentos"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex sm4>
                <v-subheader v-text="'Código postal'"></v-subheader>
              </v-flex>
              <v-flex sm7>
                <v-text-field
                  v-model="form.codigopostal"
                  :mask="codpostal"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-app>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      nombres: '',
      apellidos: '',
      pais: '',
      direccion: '',
      departamento: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      paises: ['Colombia', 'España', 'Otro :v'],
      departamentos: ['La esquina', 'Santander'],
      codpostal: '#####'
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombres &&
        this.form.apellidos &&
        this.form.pais &&
        this.form.direccion &&
        this.form.departamento
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
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
