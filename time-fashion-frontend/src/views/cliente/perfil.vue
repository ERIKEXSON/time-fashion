<template>
  <v-flex xs12>
    <v-snackbar v-model="snackbar" absolute top right color="success" class="snackbar">
      <span>Perfil actualizado</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Perfil</h2>
      </div>
      <v-form ref="form" @submit.prevent="submit">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <!-- <h3>Mantén tu información actualizada para evitar errores en compras y/o envíos</h3> -->
              <v-card-actions>
                <v-container grid-list-xl fluid>
                  <v-layout wrap>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="form.nombres"
                        :rules="rules.required"
                        label="Nombres"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="form.apellidos"
                        :rules="rules.required"
                        label="Apellidos"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
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
                            label="Fecha de nacimiento"
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
                    <v-flex xs12 sm4>
                      <v-select v-model="form.genero" :items="generos" label="Género"></v-select>
                    </v-flex>
                    <v-flex xs12 sm4>
                      <v-text-field
                        v-model="form.telefono"
                        :rules="rules.required"
                        :mask="phone"
                        required
                        label="Teléfono"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5>
                      <v-text-field
                        v-model="form.documento"
                        :rules="rules.required"
                        :mask="doc"
                        label="Cédula"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5>
                      <v-text-field
                        v-model="form.nacionalidad"
                        label="Nacionalidad"
                        :rules="rules.required"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2>
                      <v-btn dark @click="agregarDireccion = true" v-text="'Dirección'"></v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-actions>
              <v-card-actions>
                <div class="contornoboton">
                  <v-btn
                    :disabled="!formIsValid"
                    class="botonConfirmar"
                    flat
                    color="black"
                    type="submit"
                  >Actualizar</v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-form>
    </nav>
    <v-dialog v-model="agregarDireccion">
      <v-card>
        <v-card-text>
          <nav class="borde">
            <div class="tituloCuadro"><h2>Agregar dirección</h2></div>
            <v-card>
              <v-card-actions>
                <v-container grid-list-xl fluid>
                  <v-layout wrap>
                    <v-flex xs12 sm4>
                      <v-text-field
                        v-model="departamento"
                        label="Departamento"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
                      <v-text-field
                        v-model="ciudad"
                        label="Ciudad"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4>
                      <v-text-field
                        v-model="direccion"
                        label="Dirección"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-btn
                  class="botonRegistrar"
                  :disabled="!datosValidos"
                  flat
                  color="black"
                  @click="agregarDir"
                  v-text="'Agregar dirección'"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </nav>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="botonCerrar" flat @click="agregarDireccion = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-flex>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      nombres: '',
      apellidos: '',
      genero: '',
      correo: '',
      direccion: '',
      telefono: '',
      documento: '',
      nacionalidad: ''
    })
    return {
      departamento: '',
      ciudad: '',
      direccion: '',
      agregarDireccion: false,
      menu: '',
      date: '',
      snackbar: false,
      doc: '#################',
      phone: 'phone',
      form: Object.assign({}, defaultForm),
      rules: {
        correo: [
          val => (val || '').length > 0 || 'Este campo es requerido',
          v => /.+@.+/.test(v) || 'El correo debe ser válido'
        ],
        required: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      generos: ['Masculino', 'Femenino'],
      show1: false
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  computed: {
    datosValidos () {
      return (
        this.departamento &&
        this.ciudad &&
        this.direccion
      )
    },
    formIsValid () {
      return (
        this.form.nombres &&
        this.form.apellidos &&
        this.form.correo &&
        this.form.telefono &&
        this.form.documento
      )
    }
  },
  methods: {
    agregarDir () {
      this.departamento = ''
      this.ciudad = ''
      this.direccion = ''
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
<style>
.botonConfirmar {
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
  border-radius: 15px;
}
.botonConfirmar button:not([disabled="disabled"]):hover {
  background-color: rgba(136, 16, 248, 0.795);
}
.contornoboton {
  margin: auto;
}
.borde {
  text-align: center;
  border: #000000 3px solid;
  margin-bottom: 30px;
}
.tituloCuadro {
  background-color: #000000;
  padding: 5px;
  color: white;
}
</style>
