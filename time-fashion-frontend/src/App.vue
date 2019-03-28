<template>
  <component :is="layout"></component>
</template>

<script>
import AdministradorLayout from './layouts/Administrador.vue'
import PrincipalLayout from './layouts/Principal.vue'
import HombresLayout from './layouts/Hombres.vue'
import MujeresLayout from './layouts/Mujeres.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: { AdministradorLayout, PrincipalLayout, HombresLayout, MujeresLayout },
  computed: mapState(['layout'])
}
</script>
