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
      <span>Tarjeta crédito agregada</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-card width="1045">
          <v-card-text>
            <h2>Seleccione su método de pago</h2>
            <v-btn depressed style="background-color: transparent" @click="visa = true"><img src="@/assets/tarjetasCredito.jpg" height="55px" width="100px"></v-btn>
            <v-card-actions>
              <v-container v-show="visa" fluid>
                <v-layout row>
                  <v-flex xs12 sm3>
                    <v-subheader v-text="'N° de tarjeta'"></v-subheader>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-text-field
                      v-model="form.numerotarjeta"
                      :mask="tarjetacredito"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm3>
                    <v-subheader v-text="'Fecha de caducidad'"></v-subheader>
                  </v-flex>
                  <v-flex sm1>
                    <v-text-field
                      v-model="form.mescaducidad"
                      :rules="rules.required"
                      :mask="mes"
                      label="Mes"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex sm1></v-flex>
                  <v-flex sm1>
                    <v-text-field
                      :mask="year"
                      label="Año"
                      v-model="form.yearcaducidad"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm3>
                    <v-subheader v-text="'Código de seguridad CVV'"></v-subheader>
                  </v-flex>
                  <v-flex sm1>
                    <v-text-field
                      :mask="codigo"
                      v-model="form.codigocvv"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm3>
                    <v-subheader v-text="'Nombre del titular'"></v-subheader>
                  </v-flex>
                  <v-flex sm4>
                    <v-text-field
                      label="Nombre"
                      v-model="form.nombretitular"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex sm1></v-flex>
                  <v-flex sm4>
                    <v-text-field
                      label="Apellidos"
                      v-model="form.apellidotitular"
                      :rules="rules.required"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                  <div class="botonCancelar">
                  <v-btn flat @click="resetForm">Cancelar</v-btn>
                  </div>
                  <div class="botonAgregarTarjeta">
                    <v-btn
                      @click="visa = false"
                      :disabled="!formIsValid"
                      flat
                      type="submit"
                    >Agregar tarjeta</v-btn>
                  </div>
                </v-card-actions>
              </v-container>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-container>
    </v-form>
  </v-app>
</template>
<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      numerotarjeta: '',
      mescaducidad: '',
      yearcaducidad: '',
      codigocvv: '',
      nombretitular: '',
      apellidotitular: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      tarjetacredito: 'credit-card',
      mes: '##',
      year: '####',
      codigo: '###',
      visa: false
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.numerotarjeta &&
        this.form.mescaducidad &&
        this.form.yearcaducidad &&
        this.form.codigocvv &&
        this.form.nombretitular &&
        this.form.apellidotitular
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
<style>
  .snackbar{
    color: black
 }
 .botonAgregarTarjeta{
    background-color: rgba(206, 98, 252, 0.795);
    margin-left: 10px;
    transition: all .2s linear
 }
 .botonAgregarTarjeta button:not([disabled="disabled"]):hover{
    background-color: rgba(136, 16, 248, 0.795)
 }
</style>
