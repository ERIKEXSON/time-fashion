<template>
  <v-app>
    <nav class="cuadrofactura">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>Factura</h2>
      </div>
      <v-card flat>
        <v-form ref="form" @submit.prevent="submit">
          <v-container grid-list-xl fluid>
              <div>
                  <v-img :src="img" class="ima"></v-img>
                  <nav class="cabe">
                    <h4>asdasdasdas</h4>
                    <h4>asdasdasdas</h4>
                    <h4>asdasdasdas</h4>
                    <h4>asdasdasdas</h4>
                    <h4>khsdbjhbnksjdnkfu</h4>
                  </nav>
                  <nav class="cabe1">
                    <h4>capi capi capi</h4>
                    <h4>capi capi capi</h4>
                    <h4>capi capi capi</h4>
                    <h4>capi capi capi</h4>
                    <h4>capi cap capi</h4>
                  </nav>
              </div>

          </v-container>
        </v-form>
      </v-card>
    </nav>
    <!--Lista de Productos-->
    <nav class="cuadrofactura">
      <div style="background-color:#000000;padding: 5px;color: white">
        <h2>opcional</h2>
      </div>
    </nav>
  </v-app>
</template>
<script>
import img from '@/assets/busos.png'
export default {
  data () {
    const defaultForm = Object.freeze({
      codigo: '',
      nombre: '',
      marca: '',
      precio: ''
    })
    return {
      img,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
        codigo: [val => (val || '').length > 0 || 'Este campo es requerido'],
        precio: [val => (val || '').length > 0 || 'Este campo es requerido'],
        marca: [val => (val || '').length > 0 || 'Este campo es requerido']
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      search: '',
      headers: [
        { text: 'Código', value: 'codigo' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Marca', value: 'marca' },
        { text: 'Precio', value: 'valor' }
      ],
      desserts: [
        {
          codigo: 'ASD812',
          nombre: 'Shorts',
          marca: 'roballo',
          valor: 10000
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
<style>
.cabe{
  display: inline-block;
}
.cabe1{
  display: inline-block;
  margin :0 0 0 10px;
}
.ima{
  width: 50px;
  height: 50px
}
.cuadrofactura{
width:1045px ;
text-align: center;
border: #000000 3px solid;
margin-bottom: 30px;
}
</style>
