<template>
  <v-flex xs12>
    <v-snackbar v-model="snackbar" absolute top right color="success" class="snackbar">
      <span>Dirección agregada</span>
      <v-icon>check_circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <nav class="borde">
          <div class="tituloCuadro">
            <h2>Agrega tu dirección</h2>
          </div>
          <v-card>
            <v-card-text>
              <v-card-actions>
                <v-container fluid>
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
                      <v-select
                        v-model="form.pais"
                        :rules="rules.required"
                        :items="paises"
                        label="País"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        v-model="form.vivienda"
                        :rules="rules.required"
                        :items="ciudades"
                        label="Provincia/estado/región"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="form.direccion"
                        :rules="rules.required"
                        label="Dirección"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="form.celular"
                        :rules="rules.required"
                        label="Celular"
                        :mask="cel"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-card-actions>
                    <v-btn class="botonCancelar" flat @click="resetForm">Cancelar</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      class="botonAgregarTarjeta"
                      :disabled="!formIsValid"
                      flat
                      type="submit"
                    >Agregar dirección</v-btn>
                  </v-card-actions>
                </v-container>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </nav>
      </v-container>
    </v-form>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Mis direcciones</h2>
      </div>
      <v-card>
        <v-data-table :headers="headers" :items="desserts" hide-actions>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.nombres }}</td>
            <td class="text-xs-left">{{ props.item.apellidos }}</td>
            <td class="text-xs-left">{{ props.item.pais }}</td>
            <td class="text-xs-left">{{ props.item.vivienda }}</td>
            <td class="text-xs-left">{{ props.item.direccion }}</td>
            <td class="text-xs-left">{{ props.item.celular }}</td>
          </template>
        </v-data-table>
      </v-card>
    </nav>
  </v-flex>
</template>
<script>
export default {
  name: 'mis direcciones',
  data () {
    const defaultForm = Object.freeze({
      nombres: '',
      apellidos: '',
      pais: '',
      vivienda: '',
      direccion: '',
      celular: ''
    })
    return {
      paises: ['Algo', 'Algo más'],
      ciudades: ['Una', 'Otra'],
      snackbar: false,
      cel: '##############',
      form: Object.assign({}, defaultForm),
      rules: {
        required: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      headers: [
        { text: 'Nombres', value: 'nombres', sortable: false },
        { text: 'Apellidos', value: 'apellidos', sortable: false },
        { text: 'País', value: 'pais', sortable: false },
        { text: 'Provincia/Estado/Región', value: 'vivienda', sortable: false },
        { text: 'Dirección', value: 'direccion', sortable: false },
        { text: 'Celular', value: 'celular', sortable: false }
      ],
      desserts: [
        {
          nombres: '134642756125',
          apellidos: '31/1235',
          pais: '134',
          vivienda: 'adasdasdsa',
          direccion: 'CC',
          celular: '56456464'
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombres &&
        this.form.apellidos &&
        this.form.pais &&
        this.form.vivienda &&
        this.form.direccion &&
        this.form.celular
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
.borde {
  text-align: center;
  border: #000000 3px solid;
  margin: 0 auto;
  margin-bottom: 30px;
}
.snackbar {
  color: black;
}
.botonCancelar {
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
  margin: auto
}
.botonCancelar:hover {
  background-color: rgba(136, 16, 248, 0.795);
}
.botonAgregarTarjeta {
  background-color: rgba(206, 98, 252, 0.795);
  transition: all 0.2s linear;
  border-radius: 15px;
  margin: auto auto -30px auto
}
.botonAgregarTarjeta button:not([disabled="disabled"]):hover {
  background-color: rgba(136, 16, 248, 0.795);
}
.tabla {
  margin: 0 auto;
}
</style>
