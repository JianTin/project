<template>
  <div id="outer">
    <div class="inform-top">
      <i @click="$router.back()"> &lt; </i>
      <span>消息</span>
    </div>
    <!-- 1像素线 -->
    <div class="inform-line"></div>
    <ul class="inform-container" ref="Active">
      <li class="inform-list active" @click="switchActive">
        <img src="../images/xiaoxi.png" alt="">
        <p>系统消息</p>
      </li>
      <li class="inform-list" @click="switchActive">
        <img src="../images/pinglun.png" alt="">
        <p>评论消息</p>
      </li>
      <li class="inform-list" @click="switchActive">
        <img src="../images/dingdan.png" alt="">
        <p>订单消息</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    switchActive (event) {
      Array.from(this.$refs.Active.children).forEach((item, index) => {
        item.classList.remove('active')
      })
      switch (event.target.nodeName) {
        case 'IMG':
          event.target.parentNode.classList.add('active')
          break
        case 'LI':
          event.target.classList.add('active')
          break
        case 'P':
          event.target.parentNode.classList.add('active')
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#outer
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  background white
  .inform-top
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
  .inform-line
    height 1px
    background-color #BBD0F8
  .inform-container
    margin-top 20px
    display flex
    .inform-list
      display flex
      flex 1
      align-items center
      flex-direction column
      justify-content center
      border-bottom 4px solid transparent
      &.active
        border-bottom-color #699AE4
      img
        width 104px
        height 104px
        border-radius 50%
      p
        font-size 12px
        margin 10px 0
</style>
