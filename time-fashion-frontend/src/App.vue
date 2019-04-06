<template>
  <component :is="layout"></component>
</template>

<script>
import AdministradorLayout from './layouts/Administrador.vue'
import PrincipalLayout from './layouts/Principal.vue'
import HombresLayout from './layouts/Hombres.vue'
import MujeresLayout from './layouts/Mujeres.vue'
import VendedorLayout from './layouts/Vendedor.vue'
import NiñosLayout from './layouts/Niños.vue'
import NiñoLayouts from './layouts/Niño.vue'
import NiñaLayouts from './layouts/Niña.vue'
import ClienteLayout from './layouts/Cliente.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: { AdministradorLayout, PrincipalLayout, HombresLayout, MujeresLayout, VendedorLayout, NiñosLayout, NiñoLayouts, NiñaLayouts, ClienteLayout },
  computed: mapState(['layout'])
}
</script>
