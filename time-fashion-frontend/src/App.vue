<template>
  <component :is="layout"></component>
</template>

<script>
import AdministradorLayout from './layouts/Administrador.vue'
import PrincipalLayout from './layouts/Principal.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: { AdministradorLayout, PrincipalLayout},
  computed: mapState(['layout'])
}
</script>
