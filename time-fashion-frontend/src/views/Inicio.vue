<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 sm6 md>
        <v-img :src="mujeres" class="img-responsive" @click="clickPush('/mujer')"></v-img>
      </v-flex>
      <v-flex xs6 sm6 md>
        <v-img :src="hombres" class="img-responsive" @click="clickPush('/hombre')"></v-img>
      </v-flex>
      </v-layout>

      <v-layout row wrap>
      <v-flex xs6 sm4 md>
        <v-img :src="tops" class="img-responsive2" @click="clickPush('/tops-mujer')"></v-img>
      </v-flex>
      <v-flex xs6 sm4 md>
        <img src="@/assets/frase.png" class="img-responsive img" alt="">
      </v-flex>
      <v-flex xs6 sm4 md>
        <v-img :src="tanks" class="img-responsive2" @click="clickPush('/tanks-hombre')"></v-img>
      </v-flex>
      <v-flex xs6 sm4 md>
        <v-img :src="shorts" class="img-responsive2" @click="clickPush('/shorts-y-faldas-mujer')"></v-img>
      </v-flex>
      <v-flex xs6 sm4 md>
        <v-img :src="niños" class="img-responsive2" @click="clickPush('/niños')"></v-img>
      </v-flex>
      <v-flex xs6 sm4 md>
        <v-img :src="camisetas" class="img-responsive2" @click="clickPush('/camisetas-hombre')"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import MUJERES from '@/assets/mujeres.png'
import HOMBRES from '@/assets/hombres.png'
import TOPS from '@/assets/tops.png'
import TANKS from '@/assets/joggers.png'
import SHORTS from '@/assets/shorts.png'
import NIÑOS from '@/assets/busos.png'
import CAMISETAS from '@/assets/camisas.png'

export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    clickPush (value) {
      this.$router.push(value)
    }
  },
  data () {
    return {
      mujeres: MUJERES,
      hombres: HOMBRES,
      tops: TOPS,
      tanks: TANKS,
      shorts: SHORTS,
      niños: NIÑOS,
      camisetas: CAMISETAS
    }
  }
}
</script>

<style>
.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
}
.img-responsive2{
    padding: 40px 30px 0px 50px;
    display: inline-block;
    height: 358px;
    width: 360px;
    margin-right: 40px;
  }
</style>
