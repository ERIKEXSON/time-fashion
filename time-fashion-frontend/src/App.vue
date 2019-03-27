<template>
  <component :is="layout"></component>
</template>

<script>
import AdministradorLayout from './layouts/Administrador.vue'
import PrincipalLayout from './layouts/Principal.vue'
import HombresLayout from './layouts/Hombres.vue'
import VendedorLayout from './layouts/Vendedor.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: { AdministradorLayout, PrincipalLayout, HombresLayout, VendedorLayout },
  computed: mapState(['layout'])
}
</script>
