<template>
  <v-app>
    <nav style="width:810px ;text-align: center; border: #000000 3px solid;margin-bottom: 30px">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Agregar producto</h2>
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
                  v-model="form.nombre"
                  :rules="rules.nombre"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.codigo"
                  :rules="rules.codigo"
                  label="Código"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.precio"
                  :rules="rules.precio"
                  label="Precio"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.marca"
                  :rules="rules.marca"
                  label="Marca"
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
    <nav style="text-align:center;border: #000000 3px solid;margin-bottom: 30px">
      <div style="background-color:#000000;padding: 5px;color: white"><h2>Productos</h2></div>
      <v-card width="800">
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
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.precio }}</td>
            <td class="text-xs-left">{{ props.item.marca }}</td>
            <div style="text-align: center">
                <v-btn fab dark small color="success">
                <v-icon dark color="black">add</v-icon>
                </v-btn>

                <v-btn fab dark small color="error">
                <v-icon dark color="black">delete</v-icon>
                </v-btn>

                <v-btn fab dark small color="warning">
                <v-icon dark color="black">edit</v-icon>
                </v-btn>
            </div>
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
      nombre: '',
      codigo: '',
      precio: '',
      marca: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo: [val => (val || '').length > 0 || 'Este campo es requerido'],
        precio: [val => (val || '').length > 0 || 'Este campo es requerido'],
        marca: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido']
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Codigo', value: 'codigo' },
        { text: 'Precio', value: 'precio' },
        { text: 'Marca', value: 'marca' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'Shorts',
          codigo: 'ASD812A',
          precio: 1000000,
          marca: 'roballo'
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
          this.form.codigo &&
          this.form.precio &&
          this.form.marca
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
