<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 sm6 md>
          <img src="@/assets/mujeres.png" class="img-responsive" alt="">
      </v-flex>
      <v-flex xs6 sm6 md>
          <img src="@/assets/hombres.png" class="img-responsive" alt="">
      </v-flex>
      </v-layout>

      <v-layout row wrap>
      <v-flex xs6 sm4 md>
          <img src="@/assets/tops.png" class="img-responsive" alt="">
      </v-flex>
      <v-flex xs6 sm4 md>
          <img src="@/assets/frase.png" class="img-responsive" alt="">
      </v-flex>
      <v-flex xs6 sm4 md>
          <img src="@/assets/joggers.png" class="img-responsive" alt="">
      </v-flex>
      <v-flex xs6 sm4 md>
          <img src="@/assets/shorts.png" class="img-responsive" alt="">
      </v-flex>
      <v-flex xs6 sm4 md>
          <img src="@/assets/busos.png" class="img-responsive" alt="">
      </v-flex>
      <v-flex xs6 sm4 md>
          <img src="@/assets/camisas.png" class="img-responsive" alt="">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
<style>
.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
}
</style>
