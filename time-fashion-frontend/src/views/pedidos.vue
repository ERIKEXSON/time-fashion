<template>
  <v-tabs
    centered
    color="black"
    dark
    icons-and-text
    style="margin-bottom: 400px"
  >
    <v-tabs-slider color="cyan"></v-tabs-slider>

    <v-tab href="#tab-1" style="margin-right: 200px">
      Carrito de Compras
      <v-icon>add_shopping_cart</v-icon>
    </v-tab>

    <v-tab href="#tab-2" style="margin-right: 200px">
      Revisar Pedido
      <v-icon>assignment</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Pedido Procesado
      <v-icon>assignment_turned_in</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 3"
      :key="i"
      :value="'tab' + i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>
<script>
export default {
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
