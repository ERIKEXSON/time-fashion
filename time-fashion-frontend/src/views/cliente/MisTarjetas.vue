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
                        v-model="form.numero"
                        :mask="tarjetacredito"
                        :rules="rules.tarjeta"
                        label="Número de tarjeta"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-text-field
                        v-model="form.fecha"
                        :rules="rules.required"
                        :mask="caducidad"
                        label="Fecha caducidad"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6 sm1>
                      <v-text-field
                        :mask="codigo"
                        v-model="form.cvv"
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
                      @click="resetForm"
                    >Cancelar</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      :disabled="!formIsValid"
                      flat
                      class="botonAgregarTarjeta"
                      @click="register"
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
          :items="tarjetas"
          hide-actions
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.numero }}</td>
            <td class="text-xs-left">{{ props.item.fecha }}</td>
            <td class="text-xs-left">{{ props.item.cvv }}</td>
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">
              <v-btn @click="deteleTarjeta(props.item)" fab dark small color="error">
                <v-icon dark color="white">delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </nav>
  </v-flex>
</template>
<script>
import api from '@/plugins/api'
import { mapState } from 'vuex'
export default {
  data () {
    const defaultForm = Object.freeze({
      numero: '',
      fecha: '',
      cvv: '',
      nombre: ''
    })
    return {
      editIndex: '',
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
        { text: 'N° de tarjeta', value: 'numero', sortable: false },
        { text: 'Fecha caducidad', value: 'fecha', sortable: false },
        { text: 'CVV', value: 'cvv', sortable: false },
        { text: 'Nombre y apellido', value: 'nombre', sortable: false },
        { text: 'Opciones', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState(['tarjetas', 'user']),
    formIsValid () {
      return (
        this.form.numero &&
        this.form.fecha &&
        this.form.cvv &&
        this.form.nombre
      )
    }
  },
  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    async register () {
      const { data: tarjeta } = await api.post('/paymentMethod', {
        paymentMethodNew: {
          nombre: this.lowerCase(this.form.nombre),
          numero: this.form.numero,
          cvv: this.form.cvv,
          fecha: this.form.fecha,
          userId: this.user.uuid
        }
      })
      this.snackbar = true
      this.resetForm()
      let clonTarjetas = [...this.tarjetas]
      clonTarjetas.push(tarjeta)
      this.$store.commit('SET_TARJETAS', clonTarjetas)
    },
    async getTarjetas () {
      const { data: tarjetasData } = await api.get('/paymentMethod')
      this.$store.commit('SET_TARJETAS', tarjetasData)
    },
    async deteleTarjeta (item) {
      try {
        const { data: tarjeta } = await api.delete(`/paymentMethod/${item.uuid}`)
        let clonTarjeta = [...this.tarjetas]
        const index = this.tarjetas.indexOf(item)
        clonTarjeta.splice(index, 1)
        this.$store.commit('SET_TARJETAS', clonTarjeta)
      } catch (error) {
        console.error(error)
      }
    },
    lowerCase (val) {
      return val.toLowerCase()
    }
  },
  created () {
    this.getTarjetas()
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
