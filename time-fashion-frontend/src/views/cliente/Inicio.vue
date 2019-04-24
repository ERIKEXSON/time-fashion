<template>
  <v-app>
    <div class="imagenInicio">
      <img src="@/assets/perfil.png" width="100" height="100">
      <h2>Bienvenido, {{ usuario }}</h2>
      <h3>Gestiona tu información para mejorar tu experiencia</h3>
    </div>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      usuario: 'cualquiera'
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
<style>
  .imagenInicio{
    text-align: center;
    width: fit-content;
    margin: auto
  }
</style>
