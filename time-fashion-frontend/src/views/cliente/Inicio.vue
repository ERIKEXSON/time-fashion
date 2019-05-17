<template>
  <v-flex xs12>
    <div class="imagenInicio">
      <img src="@/assets/favicon.png" width="300" height="300">
      <h1>Bienvenido</h1>
      <v-btn round to="/" color="primary">Entra y busca tus productos</v-btn>
    </div>
  </v-flex>
</template>
<script>
export default {
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
