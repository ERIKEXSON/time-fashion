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
      <v-form ref="form">
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
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="form.correo"
                        label="Correo electrónico"
                        :rules="rules.correo"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
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
                    @click="update"
                  >Actualizar</v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-form>
    </nav>
    <v-snackbar v-model="snackbarDireccion" absolute top right color="success" class="snackbar">
      <span>Direccion actualizada</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <v-dialog v-model="agregarDireccion">
      <v-card>
        <v-card-text>
          <nav class="borde">
            <div class="tituloCuadro"><h2>Dirección</h2></div>
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
                  @click="actualizarDireccion"
                  v-text="'Actualizar dirección'"
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
import api from '@/plugins/api'
import { mapState } from 'vuex'
export default {
  data () {
    const defaultForm = Object.freeze({
      nombres: '',
      apellidos: '',
      correo: '',
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
      snackbar: false,
      snackbarDireccion: false,
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
      show1: false
    }
  },
  computed: {
    ...mapState(['user']),
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
        this.form.documento &&
        this.form.nacionalidad
      )
    }
  },
  methods: {
    async update () {
      const { data: res } = await api.put(`/user/${this.user.uuid}`, {
        userUpdate: {
          nombre: this.lowerCase(this.form.nombres),
          apellido: this.lowerCase(this.form.apellidos),
          cedula: this.lowerCase(this.form.documento),
          telefono: this.lowerCase(this.form.telefono),
          email: this.lowerCase(this.form.correo),
          nacionalidad: this.lowerCase(this.form.nacionalidad)
        }
      })
      this.$store.commit('SET_USER', res)
      this.snackbar = true
    },
    async actualizarDireccion () {
      const union = (this.departamento + '-' + this.ciudad + '-' + this.direccion)
      const res = await api.put(`/user/${this.user.uuid}`, {
        userUpdate: {
          direcciones: this.lowerCase(union)
        }
      })
      this.snackbarDireccion = true
    },
    lowerCase (val) {
      return val.toLowerCase()
    }
  },
  created () {
    this.form = {
      nombres: this.user.nombre,
      apellidos: this.user.apellido,
      correo: this.user.email,
      telefono: this.user.telefono,
      documento: this.user.cedula,
      nacionalidad: this.user.nacionalidad
    }
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
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
