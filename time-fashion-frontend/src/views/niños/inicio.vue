<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm12 md>
          <img src="@/assets/niños/ropan.png" class="img-responsive hidden-sm-and-down" style="margin-top: 10px" alt="">
      </v-flex>
        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/bodyn.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Chaqueta Azul Oscuro Texto <v-spacer></v-spacer> $84.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/busiton.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio">Joggers Negro Básico<v-spacer></v-spacer> $54.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/buson.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Top Blanco Texto<v-spacer></v-spacer> $26.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/busonr.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Top Negro Texto<v-spacer></v-spacer> $26.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/joggersn.png" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Vestido Azul Oscuro Flores<v-spacer></v-spacer> $48.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/niños/topn.jpg" class="img-responsive" alt=""></v-card-text>
            <v-card-title class="precio"> Shorts Mostaza Básico <v-spacer></v-spacer> $40.000</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'niños-layout')
  }
}
</script>