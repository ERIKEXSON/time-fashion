
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
      encabezado: [
        { text: 'Color', value: 'color' },
        { text: 'Código', value: 'codigo' },
        { text: 'Tallas', value: 'tallas' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: '' }
      ],
      contenido: [
        {
          color: 'VeDA',
          tallas: 'S, Mrde',
          codigo: 'AS981, XL',
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
