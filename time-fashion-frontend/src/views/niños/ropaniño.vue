<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm12 md>
          <img src="@/assets/niños/ropan.png" class="img-responsive hidden-sm-and-down" style="margin-top: 10px" alt="">
      </v-flex>
        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/niño/azul.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Camiseta Azul Lavanderia<v-spacer></v-spacer> $26.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/niño/buso.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio">Buso Gris Texto<v-spacer></v-spacer> $43.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/niño/Joggers.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Joggers Negro Rayas<v-spacer></v-spacer> $38.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/niño/mostaza.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Camiseta Mostaza Rayas<v-spacer></v-spacer> $24.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/niño/rosada.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Camiseta Rosada Texto<v-spacer></v-spacer> $20.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/niño/shorts.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Shorts Gris Texto <v-spacer></v-spacer> $33.000</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'niño-layouts')
  }
}
</script>
