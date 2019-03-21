<template>
  <div>
    <img src="@/assets/logo.png" alt="">
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
