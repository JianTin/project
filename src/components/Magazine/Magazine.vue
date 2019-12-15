<template>
  <div class="outer"
       @click="goTo">
    <img src="./image/575edd9ce2074852956e2f516d3eb410.jpg"
         alt="">
    <div class="text">
      <p class="title">中国辣度</p>
      <p class="describes">
        <span class="time">2019年11越</span>
        <span>551期</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo () {
      this.$router.push('/home/MagineList')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../comm/maxi.styl'
.outer
  padding 20px
  border-bottom 1px solid $white
  display flex
  img
    width 150px
    height 180px
  .text
    margin-left 20px
    .title
      font-size 14px
      font-weight 600
    .describes
      span
        font-size 12px
        color $grow
      .time
        margin-right 10px
</style>
