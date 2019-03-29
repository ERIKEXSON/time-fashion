<template>
  <v-app>
    <nav style="text-align: center; border:  #000000 3px solid;margin-bottom: 30px">
      <div style="background-color: #000000;padding: 5px;color: white">
        <h2>Agregar detalle</h2>
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
          timeout="2000"
        >
          <span>Producto agregado</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.color1"
                  :rules="rules.color1"
                  label="Color"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.codigo1"
                  :rules="rules.codigo1"
                  label="Código"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.tallas1"
                  :rules="rules.tallas1"
                  label="Tallas"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.cantidad1"
                  :rules="rules.cantidad1"
                  label="Cantidad"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat @click="resetForm">Cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!formIsValid"
              flat
              color="primary"
              type="submit"
            >Agregar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <nav style=" text-align: center;border:  #000000 3px solid;margin-bottom: 30px">
      <div style="background-color: #000000;padding: 5px;color: white"><h2>Detalles</h2></div>
      <v-card width="1045">
        <v-card-title>
          <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          >
          </v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.color }}</td>
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.tallas }}</td>
            <td class="text-xs-left">{{ props.item.cantidad }}</td>
            <td class="text-xs-center">
              <v-btn fab dark small color="error">
              <v-icon dark color="black">delete</v-icon>
              </v-btn>
              <v-btn fab dark small color="warning">
              <v-icon dark color="black">edit</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </nav>
  </v-app>
</template>
<script>
export default {
  data () {
     const defaultForm = Object.freeze({
      color1: '',
      codigo1: '',
      tallas1: '',
      cantidad1: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        color1: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo1: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tallas1: [val => (val || '').length > 0 || 'Este campo es requerido'],
        cantidad1: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Color', value: 'color' },
        { text: 'Código', value: 'codigo' },
        { text: 'Tallas', value: 'tallas' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: '' }
      ],
      desserts: [
        {
          color: 'Verde',
          codigo: 'AS981DA',
          tallas: 'S, M, XL',
          cantidad: 15
        },
        {
          color: 'Rojo',
          codigo: 'KOKD9I3J',
          tallas: 'S, M',
          cantidad: 10
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.color1 &&
          this.form.codigo1 &&
          this.form.tallas1 &&
          this.form.cantidad1
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
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
