<template>
    <v-app>
      <div>
        <img src="@/assets/favicon.png"  class="imgini">
      </div>
    </v-app>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'vendedor-layout')
  }
}
</script>
<style>
.imgini{
  width:300px;
  height:300;
  text-align: center;
  margin:100px auto 0 auto
}
</style>
