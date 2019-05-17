<template>
  <v-flex xs12>
    <div class="imagenInicio">
      <img src="@/assets/favicon.png" width="400" height="400">
    </div>
  </v-flex>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'administrador-layout')
  }
}
</script>
