<template>
  <div class="outer">
    <p @click="$router.back()">返回</p>
    <img :src="$route.query.imgSrc"
         alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.outer
  width 100%
  height 100%
  background white
  position fixed
  top 0
  left 0
  z-index 100
</style>
