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
      <span>Tarjeta agregada</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <nav class="borde">
          <div class="tituloCuadro"><h2>Agrega tu tarjeta</h2></div>
          <v-card width="1045">
            <v-card-text>
              <v-card-actions>
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs12 sm4>
                      <v-text-field
                        v-model="form.numerotarjeta"
                        :mask="tarjetacredito"
                        :rules="rules.tarjeta"
                        label="Número de tarjeta"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex sm2>
                      <v-text-field
                        v-model="form.caducidad"
                        :rules="rules.required"
                        :mask="caducidad"
                        label="Fecha caducidad"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex sm1>
                      <v-text-field
                        :mask="codigo"
                        v-model="form.codigocvv"
                        :rules="rules.required"
                        label="CVV"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex sm5>
                      <v-text-field
                        v-model="form.nombre"
                        :rules="rules.required"
                        label="Nombre y apellido"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex sm6>
                      <v-select
                        v-model="form.tipodocumento"
                        :rules="rules.required"
                        label="Tipo de documento"
                        :items="tipos"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex sm6>
                      <v-text-field
                        v-model="form.documento"
                        :rules="rules.required"
                        label="Documento"
                        required
                        :mask="doc"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-card-actions>
                    <div class="botonCancelar">
                    <v-btn flat @click="resetForm">Cancelar</v-btn>
                    </div>
                    <div class="botonAgregarTarjeta">
                      <v-btn
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
        </nav>
      </v-container>
    </v-form>
    <nav class="borde">
      <div class="tituloCuadro"><h2>Mis tarjetas</h2></div>
      <v-card width="1045">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          hide-actions
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.numerotarjeta }}</td>
            <td class="text-xs-left">{{ props.item.caducidad }}</td>
            <td class="text-xs-left">{{ props.item.codigocvv }}</td>
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.tipodocumento }}</td>
            <td class="text-xs-left">{{ props.item.documento }}</td>
          </template>
        </v-data-table>
      </v-card>
    </nav>
  </v-app>
</template>
<script>
export default {
  name: 'mis tarjetas',
  data () {
    const defaultForm = Object.freeze({
      numerotarjeta: '',
      caducidad: '',
      codigocvv: '',
      nombre: '',
      tipodocumento: '',
      documento: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tarjeta: [val => (val || '').length > 0 || 'Este campo es requerido', val => (val || '').length > 15 || 'Ingrese número de tarjeta válido']
      },
      tipos: ['Cédula de ciudadanía', 'Tarjeta de identidad'],
      tarjetacredito: 'credit-card',
      caducidad: '##/####',
      codigo: '###',
      doc: '###############',
      headers: [
        { text: 'N° de tarjeta', value: 'numerotarjeta', sortable: false },
        { text: 'Fecha caducidad', value: 'caducidad', sortable: false },
        { text: 'CVV', value: 'codigocvv', sortable: false },
        { text: 'Nombre y apellido', value: 'nombre', sortable: false },
        { text: 'Tipo de documento', value: 'tipodocumento', sortable: false },
        { text: 'Documento', value: 'documento', sortable: false }
      ],
      desserts: [
        {
          numerotarjeta: '134642756125',
          caducidad: '31/1235',
          codigocvv: '134',
          nombre: 'adasdasdsa',
          tipodocumento: 'CC',
          documento: '56456464'
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
        this.form.nombre &&
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
    margin-bottom: 30px;
    width: fit-content
  }
  .snackbar{
      color: black
  }
  .botonCancelar{
    background-color: rgba(206, 98, 252, 0.795);
    transition: all .2s linear;
    margin-bottom: -30px
 }
 .botonCancelar:hover{
    background-color: rgba(136, 16, 248, 0.795)
 }
  .botonAgregarTarjeta{
      background-color: rgba(206, 98, 252, 0.795);
      margin-left: 10px;
      transition: all .2s linear;
      margin-bottom: -30px
  }
  .botonAgregarTarjeta button:not([disabled="disabled"]):hover{
      background-color: rgba(136, 16, 248, 0.795)
  }
 .tabla{
   margin: 0 auto
 }
</style>
