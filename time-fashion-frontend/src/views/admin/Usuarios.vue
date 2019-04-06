<template>
  <v-app>
    <nav class="borde">
      <div class="tituloCuadro">
        <h2>Agregar usuarios</h2>
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
          :timeout="2000"
          class="snackbar"
        >
          <span>¡Registro exitoso!</span>
          <v-icon>check_circle</v-icon>
        </v-snackbar>
      </div>
      <v-card width="1045">
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
                <v-select
                  v-model="form.rol"
                  :items="rol"
                  :rules="rules.rol"
                  label="Rol"
                  required
                ></v-select>
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
            </v-layout>
          </v-container>
          <v-card-actions>
            <div class="botonCancelar"><v-btn flat @click="resetForm">Cancelar</v-btn></div>
            <div class="botonRegistrar"><v-btn
              :disabled="!formIsValid"
              flat
              color="black"
              type="submit"
            >Registrar
            </v-btn></div>
          </v-card-actions>
        </v-form>
      </v-card>
    </nav>
    <nav class="borde">
      <div class="tituloCuadro"><h2>Usuarios</h2></div>
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
            <div class="botonContacto"><v-btn @click="contacto = true">Datos de contacto</v-btn></div>
            <div class="botonCompras"><v-btn @click="compras = true">Compras</v-btn></div>
          </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="contacto" width="1085">
        <v-card>
          <v-card-text>
            <nav class="borde">
              <div class="tituloCuadro"><h2>Datos de contacto</h2></div>
              <v-card width="1045">
                <v-data-table
                  :headers="datosContacto"
                  :items="desserts"
                  :search="search"
                >
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.correo }}</td>
                    <td class="text-xs-left">{{ props.item.direccion }}</td>
                    <td class="text-xs-left">{{ props.item.telefono }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </nav>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="botonCerrar"><v-btn flat @click="contacto = false">Cerrar</v-btn></div>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="compras" width="1085">
        <v-card>
          <template>
            <div>
              <v-toolbar tabs>
                <v-toolbar-title>Historial de compras</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <template v-slot:extension>
                  <v-tabs
                    v-model="tabs"
                    fixed-tabs
                    color="transparent"
                  >
                    <v-tab href="#mobile-tabs-5-1" class="primary--text">
                      <v-icon>phone</v-icon>
                    </v-tab>
                    <v-tab href="#mobile-tabs-5-2" class="primary--text">
                      <v-icon>favorite</v-icon>
                    </v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>
              <v-tabs-items v-model="tabs" class="white elevation-1">
                <v-tab-item
                  v-for="i in 3"
                  :key="i"
                  :value="'mobile-tabs-5-' + i"
                >
                  <v-card v-if="i == 1">
                    <v-card-text>
                      <nav class="borde">
                        <div class="tituloCuadro"><h2>Datos de contacto</h2></div>
                        <v-card width="1045">
                          <v-data-table
                            :headers="datosContacto"
                            :items="desserts"
                            :search="search"
                          >
                            <template v-slot:items="props">
                              <td class="text-xs-left">{{ props.item.correo }}</td>
                              <td class="text-xs-left">{{ props.item.direccion }}</td>
                              <td class="text-xs-left">{{ props.item.telefono }}</td>
                            </template>
                          </v-data-table>
                        </v-card>
                      </nav>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="botonCerrar"><v-btn flat @click="contacto = false">Cerrar</v-btn></div>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                  <v-card v-if="i == 2">
                    <v-card-text>
                      <nav class="borde">
                        <div class="tituloCuadro"><h2>asdasdasd</h2></div>
                        <v-card width="1045">
                          <v-data-table
                            :headers="datosContacto"
                            :items="desserts"
                            :search="search"
                          >
                            <template v-slot:items="props">
                              <td class="text-xs-left">{{ props.item.correo }}</td>
                              <td class="text-xs-left">{{ props.item.direccion }}</td>
                              <td class="text-xs-left">{{ props.item.telefono }}</td>
                            </template>
                          </v-data-table>
                        </v-card>
                      </nav>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="botonCerrar"><v-btn flat @click="contacto = false">Cerrar</v-btn></div>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </div>
          </template>
        </v-card>
      </v-dialog>
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
      rol: '',
      direccion: '',
      tel: ''
    })
    return {
      contacto: false,
      compras: false,
      snackbar: false,
      tabs: null,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        apellido: [val => (val || '').length > 0 || 'Este campo es requerido'],
        documento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tipodocumento: [val => (val || '').length > 0 || 'Este campo es requerido'],
        correo: [val => (val || '').length > 0 || 'Este campo es requerido', v => /.+@.+/.test(v) || 'El correo debe ser válido'],
        rol: [val => (val || '').length > 0 || 'Este campo es requerido'],
        direccion: [val => (val || '').length > 0 || 'Este campo es requerido'],
        tel: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      tipos: ['Tarjeta de identidad', 'Cédula de ciudadanía'],
      rol: ['Administrador', 'Vendedor', 'Cliente'],
      defaultForm,
      search: '',
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Documento', value: 'documento' },
        { text: 'Tipo de documento', value: 'tipodocumento' },
        { text: '' }
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
      ],
      datosContacto: [
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Teléfono', value: 'telefono' }
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
        this.form.rol &&
        this.form.direccion &&
        this.form.tel
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
<style>
 .borde{
   text-align:center;
   border: #000000 3px solid;
   margin-bottom: 30px
 }
 .tituloCuadro{
   background-color:#000000;
   padding: 5px;
   color: white
 }
 .botonCancelar{
    background-color: rgba(206, 98, 252, 0.795);
    transition: all .2s linear
 }
 .botonCancelar:hover{
    background-color: rgba(136, 16, 248, 0.795)
 }
 .botonRegistrar{
    background-color: rgba(206, 98, 252, 0.795);
    margin-left: 10px;
    transition: all .2s linear
 }
 .botonRegistrar:hover{
    background-color: rgba(136, 16, 248, 0.795)
 }
 .snackbar{
   color: black
 }
 .botonContacto{
    display: inline-block;
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
 }
 .botonCompras{
    display: inline-block;
    margin-left: 20px;
    background-color: rgba(34, 194, 215, 0.61);
    transition: all .2s linear
 }
 .botonContacto:hover{
    background-color: rgb(145, 45, 45)
 }
 .botonCompras:hover{
    background-color: rgb(145, 45, 45)
 }
</style>
