<template>
  <div class="outer"
       @click="goTo">
    <img :src="magazine.coverImg"
         alt="">
    <div class="text">
      <p class="title">{{magazine.title}}</p>
      <p class="describes">
        <span class="time">{{magazine.magazineId}}</span>
        <span>{{magazine.magazineNo}}期</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    magazine: Object
  },
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
