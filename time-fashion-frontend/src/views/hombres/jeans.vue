<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm12 md>
          <img src="@/assets/hombre/camisetas/grande.png" class="img-responsive hidden-sm-and-down" style="margin-top: 10px" alt="">
      </v-flex>
        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/jeans/azul.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Vestido Mostaza Texto<v-spacer></v-spacer> $30.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/jeans/basico.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio">Buso Rosado Texto<v-spacer></v-spacer> $48.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/jeans/lavanderia.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Top Rosado Texto <v-spacer></v-spacer> $24.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/jeans/negro.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Top Azul Oscuro Flores<v-spacer></v-spacer> $25.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src="@/assets/hombre/jeans/oscuro.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Vestido Negro Cuadros<v-spacer></v-spacer> $38.000</v-card-title>
        </v-flex>

        <v-flex xs6 sm4 md>
            <v-card-text><img src= "@/assets/hombre/jeans/rotos.jpg" class="img-responsive" style="margin-top: 30px" alt=""></v-card-text>
            <v-card-title class="precio"> Top Verde Texto <v-spacer></v-spacer> $26.000</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'hombres-layout')
  }
}
</script>
