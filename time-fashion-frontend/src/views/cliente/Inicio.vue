<template>
    <v-app></v-app>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
