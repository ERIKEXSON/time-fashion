<template>
  <component :is="layout"></component>
</template>

<script>
import AdministradorLayout from './layouts/Administrador.vue'
import PrincipalLayout from './layouts/Principal.vue'
import HombresLayout from './layouts/Hombres.vue'
<<<<<<< HEAD
import MujeresLayout from './layouts/Mujeres.vue'
=======
import VendedorLayout from './layouts/Vendedor.vue'
>>>>>>> c3b670776b9f340f2dc60737ea4aa2e365a2e30a
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
<<<<<<< HEAD
  components: { AdministradorLayout, PrincipalLayout, HombresLayout, MujeresLayout },
=======
  components: { AdministradorLayout, PrincipalLayout, HombresLayout, VendedorLayout },
>>>>>>> c3b670776b9f340f2dc60737ea4aa2e365a2e30a
  computed: mapState(['layout'])
}
</script>
