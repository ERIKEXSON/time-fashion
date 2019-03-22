<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs sm6 md>
        <v-card-text><img src="@/assets/mujeres.png" alt=""></v-card-text>
      </v-flex>
      <v-flex xs sm6 md>
        <v-card-text><img src="@/assets/hombres.png" alt=""></v-card-text>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card-text><img src="@/assets/tops.png" alt=""></v-card-text>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card-text><img src="@/assets/frase.png" alt=""></v-card-text>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card-text><img src="@/assets/joggers.png" alt=""></v-card-text>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card-text><img src="@/assets/shorts.png" alt=""></v-card-text>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card-text><img src="@/assets/busos.png" alt=""></v-card-text>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card-text><img src="@/assets/camisas.png" alt=""></v-card-text>
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
