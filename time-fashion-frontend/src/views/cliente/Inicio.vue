<template>
  <v-app>
    <div class="imagenInicio">
      <img src="@/assets/perfil.png" width="300" height="300">
      <h1>Bienvenido, {{ usuario }}</h1>
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
    margin: 100px auto 0 auto
  }
</style>
