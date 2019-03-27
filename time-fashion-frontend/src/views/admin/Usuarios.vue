<template>
  <v-app>
    <nav style="border: #6a1b9a 3px solid;margin-bottom: 30px">
      <div style="background-color:#6a1b9a;padding: 5px;color: white">
        <h2>Agregar usuarios</h2>
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
          timeout="2000"
        >
          <span>¡Registro exitoso!</span>
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
                  v-model="form.documento"
                  :rules="rules.documento"
                  label="Documento"
                  required
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
                  v-model="form.contraseña"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="rules.contraseña"
                  :type="show1 ? 'text' : 'password'"
                  label="Contraseña"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.direccion"
                  :rules="rules.direccion"
                  label="Dirección"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.tel"
                  :rules="rules.tel"
                  label="Teléfono"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-checkbox
                  v-model="form.terms"
                  color="green"
                >
                  <template v-slot:label>
                    <div @click.stop="">
                      Acepta los
                      <a href="javascript:;" @click.stop="terms = true">términos</a>
                      y
                      <a href="javascript:;" @click.stop="conditions = true">condiciones</a>
                    </div>
                  </template>
                </v-checkbox>
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
            >Registrar</v-btn>
          </v-card-actions>
        </v-form>
        <v-dialog v-model="terms" width="70%">
          <v-card>
            <v-card-title class="title">Términos</v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                color="purple"
                @click="terms = false"
              >Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="conditions" width="70%">
          <v-card>
            <v-card-title class="title">Condiciones</v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                color="purple"
                @click="conditions = false"
              >Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </nav>
    <nav style="border: #6a1b9a 3px solid;margin-bottom: 30px">
      <div style="background-color:#6a1b9a;padding: 5px;color: white"><h2>Usuarios</h2></div>
      <v-card width="1045">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.nombre }}</td>
            <td class="text-xs-left">{{ props.item.apellido }}</td>
            <td class="text-xs-left">{{ props.item.documento }}</td>
            <td class="text-xs-left">{{ props.item.tipodocumento }}</td>
            <td class="text-xs-left">{{ props.item.correo }}</td>
            <td class="text-xs-left">{{ props.item.direccion }}</td>
            <td class="text-xs-left">{{ props.item.telefono }}</td>
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
      documento: '',
      tipodocumento: '',
      correo: '',
      contraseña: '',
      direccion: '',
      tel: '',
      terms: false
    })
    return {
      show1: false,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        apellido: [val => (val || '').length > 0 || 'Este campo es requerido'],
        documento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tipodocumento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido'],
        contraseña: [val => (val || '').length > 0 || 'Este campo es requerido'],
        direccion: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tel: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      tipos: ['Tarjeta de identidad', 'Cédula de ciudadanía'],
      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Documento', value: 'documento' },
        { text: 'Tipo de documento', value: 'tipodocumento'},
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Teléfono', value: 'telefono' }
      ],
      desserts: [
        {
          nombre: 'Errik',
          apellido: 'Mamerto',
          documento: '123123123',
          tipodocumento: 'CC',
          correo: 'asdasda@hola.com',
          direccion: 'asdasdasd123123',
          telefono: '123123123'
        }
      ]
    }
  },
  computed: {
    formIsValid () {
      return (
        this.form.nombre &&
        this.form.apellido &&
        this.form.documento &&
        this.form.tipodocumento &&
        this.form.correo &&
        this.form.contraseña &&
        this.form.direccion &&
        this.form.tel &&
        this.form.terms
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
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
