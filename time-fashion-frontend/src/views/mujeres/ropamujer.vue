<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm12 md>
          <img src="@/assets/mujer/grande.png" class="img-responsive hidden-sm-and-down" style="margin-top: 10px" alt="">
      </v-flex>
        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/mujer/chaqueta.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Chaqueta Azul Oscuro <v-spacer></v-spacer> $84.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/mujer/joggers.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio">Joggers Negro Básico<v-spacer></v-spacer> $54.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/mujer/topblanco.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Top Blanco Texto<v-spacer></v-spacer> $26.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/mujer/topnegro.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Top Negro Texto<v-spacer></v-spacer> $26.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/mujer/vestido.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Vestido Azul Oscuro Flores<v-spacer></v-spacer> $48.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/mujer/shorts.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Shorts Mostaza Básico <v-spacer></v-spacer> $40.000</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'mujeres-layout')
  }
}
</script>
