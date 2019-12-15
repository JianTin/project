<template>
  <div>
    <ul>
      <li class="active">最近{{text[0]}}</li>
      <li>|</li>
      <li>已购{{text[1]}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    text: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '../../comm/maxi.styl'
div
  width 100%
  display flex
  justify-content center
  height 80px
  ul
    height 100%
    width 40%
    display flex
    justify-content space-between
    align-items center
    li
      color #757575
      font-size 12px
      &.active
        color $blue
</style>
