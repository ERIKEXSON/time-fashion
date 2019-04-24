<template>
    <v-app>
      <v-card>
        
      </v-card>
    </v-app>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')
  }
}
</script>
