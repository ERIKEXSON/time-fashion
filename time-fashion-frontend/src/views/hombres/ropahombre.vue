<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap >
        <v-flex xs12 sm12 md>
          <img src="@/assets/hombre/grande.png" class="img-responsive hidden-sm-and-down" style="margin-top: 10px" alt="">
      </v-flex>
        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/29458-1.jpg" @click="clickPush('/descripcion')" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Jeans Azul Rotos <v-spacer></v-spacer> $84.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/29634-1.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio">Shorts Blanco Texto<v-spacer></v-spacer> $65.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/30126-1.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Jeans Azul Destroyer<v-spacer></v-spacer> $78.000</v-card-title>
        </v-flex>
        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/30129-1.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Camisa Blanca Craneo<v-spacer></v-spacer> $84.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/30151-1.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Camiseta Mostaza Texto <v-spacer></v-spacer> $38.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/30834-1.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Camisa Azul Flores <v-spacer></v-spacer> $68.000 </v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'hombres-layout')
  },
  methods: {
    clickPush (value) {
      this.$router.push(value)
    }
  },
}
</script>
<style>
.precio{
  margin-top:-30px;
  display:block;
  font-size: 14px;
  font-family: 'HelvNeueHeavy', Arial, Helvetica, sans-serif;
}
</style>
