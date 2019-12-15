<template>
  <div id="outer">
    <div class="note-top">
      <i @click="$router.back()"> &lt; </i>
      <span>我的笔记</span>
    </div>
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
  .note-top
    height 80px
    line-height 80px
    text-align center
    &::after
      content ''
      height 0
      display block
      clear both
    i
      font-size 20px
      color #BBD0F8
      font-weight 700
      float left
      margin-left 20px
</style>
