<template>
  <v-flex xs12>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
      class="snackbar"
    >
      <span>Tarjeta agregada</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form">
      <v-container grid-list-xl fluid>
        <nav class="borde">
          <div class="tituloCuadro"><h2>Agrega tu tarjeta</h2></div>
          <v-card>
            <v-card-text>
              <v-card-actions>
                <v-container fluid>
                  <v-layout wrap>
                    <v-flex xs12 sm3>
                      <v-text-field
                        v-model="form.numerotarjeta"
                        :mask="tarjetacredito"
                        :rules="rules.tarjeta"
                        label="Número de tarjeta"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-text-field
                        v-model="form.caducidad"
                        :rules="rules.required"
                        :mask="caducidad"
                        label="Fecha caducidad"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 sm1>
                      <v-text-field
                        :mask="codigo"
                        v-model="form.codigocvv"
                        :rules="rules.required"
                        label="CVV"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="form.nombre"
                        :rules="rules.required"
                        label="Nombre y apellido"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-card-actions>
                    <v-btn
                      class="botonCancelar"
                      flat
                      @click="update"
                    >Cancelar</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      :disabled="!formIsValid"
                      flat
                      class="botonAgregarTarjeta"
                      @click="update"
                    >Agregar tarjeta</v-btn>
                  </v-card-actions>
                </v-container>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </nav>
      </v-container>
    </v-form>
    <nav class="borde">
      <div class="tituloCuadro"><h2>Mis tarjetas</h2></div>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="desserts"
          hide-actions
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.numerotarjeta }}</td>
            <td class="text-xs-left">{{ props.item.caducidad }}</td>
            <td class="text-xs-left">{{ props.item.codigocvv }}</td>
            <td class="text-xs-left">{{ props.item.nombre }}</td>
          </template>
        </v-data-table>
      </v-card>
    </nav>
  </v-flex>
</template>
<script>
import api from '@/plugins/api'
export default {
  data () {
    const defaultForm = Object.freeze({
      numerotarjeta: '',
      caducidad: '',
      codigocvv: '',
      nombre: ''
    })
    return {
      snackbar: false,
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tarjeta: [val => (val || '').length > 0 || 'Este campo es requerido', val => (val || '').length > 15 || 'Ingrese número de tarjeta válido']
      },
      tarjetacredito: 'credit-card',
      caducidad: '##/####',
      codigo: '###',
      doc: '###############',
      headers: [
        { text: 'N° de tarjeta', value: 'numerotarjeta', sortable: false },
        { text: 'Fecha caducidad', value: 'caducidad', sortable: false },
        { text: 'CVV', value: 'codigocvv', sortable: false },
        { text: 'Nombre y apellido', value: 'nombre', sortable: false }
      ],
      desserts: [
        {
          numerotarjeta: '134642756125',
          caducidad: '31/1235',
          codigocvv: '134',
          nombre: 'adasdasdsa'
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.numerotarjeta &&
        this.form.caducidad &&
        this.form.codigocvv &&
        this.form.nombre
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    async update () {
      const res = await api.post('/paymentMethod', {
        paymentMethodNew: {
          nombre: this.lowerCase(this.form.nombre),
          numero: this.lowerCase(this.form.numerotarjeta),
          cvv: this.lowerCase(this.form.codigocvv),
          fecha: this.lowerCase(this.form.caducidad)
        }
      })
      this.snackbar = true
      this.resetForm()
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style scoped>
  .borde{
    text-align:center;
    border: #000000 3px solid;
    margin: 0 auto;
    margin-bottom: 30px
  }
  .snackbar{
      color: black
  }
  .botonCancelar{
    background-color: rgba(206, 98, 252, 0.795);
    transition: all .2s linear;
    margin: auto
 }
 .botonCancelar:hover{
    background-color: rgba(136, 16, 248, 0.795)
 }
  .botonAgregarTarjeta{
      background-color: rgba(206, 98, 252, 0.795);
      transition: all .2s linear;
      border-radius: 15px;
      margin: auto auto -30px auto
  }
  .botonAgregarTarjeta button:not([disabled="disabled"]):hover{
      background-color: rgba(136, 16, 248, 0.795)
  }
 .tabla{
   margin: 0 auto
 }
</style>
