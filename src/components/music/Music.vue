<template>
  <h1>music</h1>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
    created () {
      this.$store.commit('routerLinks',{
        color:'rgb(0, 150, 136)',
        title:'音乐'
      });
    }
  })
</script>
<style scoped>

</style>

