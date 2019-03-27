<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs sm6 md>
        <v-card>
          <img src="@/assets/mujeres.png" height="456px" width="500px" alt="">
        </v-card>
      </v-flex>
      <v-flex xs sm6 md>
        <v-card>
          <img src="@/assets/hombres.png" height="456px" width="500px" alt="">
        </v-card>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card>
          <img src="@/assets/tops.png" height="380px" width="355px" alt="">
        </v-card>
      </v-flex>
      <v-flex xs sm4 md>
          <img src="@/assets/frase.png" height="386px" width="355px" alt="">
      </v-flex>
      <v-flex xs sm4 md>
        <v-card>
          <img src="@/assets/joggers.png" height="380px" width="355px" alt="">
        </v-card>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card>
          <img src="@/assets/shorts.png" height="380px" width="355px" alt="">
        </v-card>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card>
          <img src="@/assets/busos.png" height="380px" width="355px" alt="">
        </v-card>
      </v-flex>
      <v-flex xs sm4 md>
        <v-card>
          <img src="@/assets/camisas.png" height="380px" width="355px" alt="">
        </v-card>
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
