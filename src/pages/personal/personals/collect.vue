<template>
  <div id="outer" @click="$router.back()">
    我的收藏
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#outer
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  background-color white
</style>
