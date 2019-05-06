<template>
  <v-app>
    <nav style="width:1045px ;text-align: center; border: #000000 3px solid;margin-bottom: 30px">
        <div style="background-color:#000000;padding: 5px;color: white">
          <h2>Agregar empleado</h2>
          <v-snackbar
              v-model="snackbar"
              absolute
              top
              right
              color="success"
              timeout="2000"
            >
              <span>Empleado agregado</span>
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
                      v-model="form.apellido"
                      :rules="rules.apellido"
                      label="Apellido"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.correo"
                      :rules="rules.correo"
                      label="Correo"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.telefono"
                      :rules="rules.telefono"
                      label="Teléfono"
                      required
                      :mask="numeros"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="form.documento"
                      :rules="rules.documento"
                      label="Documento de Identidad"
                      required
                      :mask="numeros"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                <v-select
                  v-model="form.tipodocumento"
                  :items="tipos"
                  :rules="rules.tipodocumento"
                  label="Tipo de documento"
                  required
                ></v-select>
              </v-flex>
                </v-layout>
            </v-container>
            <v-card-actions>
              <v-btn flat @click="resetForm" style="background-color: #00FF08">Cancelar</v-btn>
              <v-btn
                :disabled="!formIsValid"
                flat
                color=""
                type="submit"
                style="background-color: #00FF08"
               >Agregar</v-btn>
          </v-card-actions>
         </v-form>
      </v-card>
   </nav>
<!--Lista de empleados-->
    <nav style="text-align:center;border: #000000 3px solid;margin-bottom: 30px">
      <div style="background-color:#000000;padding: 5px;color: white"><h2>Empleados</h2></div>
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
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.apellido }}</td>
            <td class="text-xs-left">{{ props.item.correo }}</td>
            <td class="text-xs-left">{{ props.item.telefono }}</td>
            <td class="text-xs-left">{{ props.item.documento }}</td>
            <td class="text-xs-left">{{ props.item.tipodocumento }}</td>
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
      apellido: '',
      correo: '',
      telefono: '',
      documento: '',
      tipodoc: ''
    })
    return {
      numeros: '###########',
      show1: false,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        apellido: [val => (val || '').length > 0 || 'Este campo es requerido'],
        telefono: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido'],
        documento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tipodocumento: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      tipos: ['Tarjeta de identidad', 'Cédula de Ciudadania', 'Otro'],
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Correo', value: 'correo' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Documento', value: 'documento' },
        { text: 'Tipodocumento', value: 'tipodocumento' },
        { text: '' }
      ],
      desserts: [
        {
          name: 'simon',
          apellido: 'tolomeo',
          correo: 'elmontador@simon.co',
          telefono: '8622t347627364',
          documento: '9872920',
          tipodocumento: ''
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
          this.form.apellido &&
          this.form.correo &&
          this.form.telefono &&
          this.form.documento &&
          this.form.tipodocumento
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
