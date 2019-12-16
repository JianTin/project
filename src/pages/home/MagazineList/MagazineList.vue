<template>
  <div classs='outer'>
    <header>
      <!--左边目录-->
      <div class="directory-left">
        <span class="iconfont icon-right-copy go-back"
              @click="goTo"></span>
        <!--可点击的目录-->
        <p class="title-directory">
          <span>目录</span>
          <span>|</span>
          <span>CONTENTS</span>
          <span></span>
        </p>
      </div>
      <!--右边转发-->
      <span class="iconfont icon-zhuanfa Forward"></span>
    </header>
    <div class="outerScroll"
         ref='outerScroll'>
      <div class="bck">
        <!--目录专题-->
        <div class="Directory ">
          <p class="blue title">
            <span class="round">⚪</span>
            <span class="chi-text">专题</span>
            <span class="eng-text">FEATURE</span>
          </p>
          <ul class="list">
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
          </ul>
        </div>
        <!--目录社会-->
        <div class="Social ">
          <p class="orange title">
            <span class="round">⚪</span>
            <span class="chi-text">社会</span>
            <span class="eng-text">SOCIAL REPORTS</span>
          </p>
          <ul class="list">
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
          </ul>
        </div>
        <!--目录文艺-->
        <div class="Literary">
          <p class="green title">
            <span class="round">⚪</span>
            <span class="chi-text">文艺</span>
            <span class="eng-text">CULTURE</span>
          </p>
          <ul class="list">
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
          </ul>
        </div>
        <!--目录生活-->
        <div class="Life">
          <p class="Egg-blue title">
            <span class="round">⚪</span>
            <span class="chi-text">生活</span>
            <span class="eng-text">LIFESTYLE</span>
          </p>
          <ul class="list">
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
          </ul>
        </div>
        <!--目录专栏-->
        <div class="column">
          <p class="purple title">
            <span class="round">⚪</span>
            <span class="chi-text">专栏</span>
            <span class="eng-text">COLUMN</span>
          </p>
          <ul class="list">
            <li>滑稽简史</li>
            <li>滑稽简史</li>
            <li>滑稽简史</li>
          </ul>
        </div>
      </div>
    </div>
    <footer>
      <div>6.0元订阅</div>
      <div>好友组队免费阅读</div>
    </footer>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  mounted () {
    // 计算 滚动区域外城的 高度
    this.$refs.outerScroll.style.height = screen.height - 80 - 80 + 'px'
    new BScroll('.outerScroll')
  },
  methods: {
    goTo () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.outer
  height 100%
.green
  color #218c74
.orange
  color #e77f67
.blue
  color #34ace0
.purple
  color #574b90
.Egg-blue
  color #3dc1d3
header
  z-index 100
  position fixed
  top 0
  left 0
  width 100%
  display flex
  justify-content space-between
  align-items center
  background #f1f2f6
  height 80px
  .directory-left
    display flex
    width 400px
    justify-content space-between
    .go-back
      line-height 80px
    .title-directory
      width 280px
      display flex
      justify-content space-between
      align-content center
      position relative
      span
        font-size 12px
        display flex
        align-items center
        height 80px
        box-sizing border-box
        &:nth-child(3)
          font-size 13px
          font-weight 600
          margin-top 2px
          margin-right 50px
        &:nth-child(4)
          position absolute
          right 20px
          bottom 22px
          width 0
          height 0
          border 10px solid red
          border-color #0abde3 transparent transparent transparent
  .Forward
    font-size 20px
    font-weight 900
    color black
    margin-right 20px
.outerScroll
  height 100%
  .bck
    margin-top 80px
    background #ffffff
    .title
      display flex
      height 50px
      margin 20px 0
      align-items center
      span
        margin 0 15px
      .round
        font-size 16px
      .chi-text
        font-size 16px
      .eng-text
        font-size 16px
        font-weight 600
        align-self flex-end
    .list
      letter-spacing 3px
      margin-left 80px
      font-size 12px
      margin-top 10px
      li
        margin 10px 0
footer
  position fixed
  bottom 0
  left 0
  display flex
  width 100%
  justify-content space-between
  background black
  height 80px
  div
    width 50%
    text-align center
    line-height 80px
    font-size 12px
    &:nth-child(1)
      background #1e90ff
      color white
    &:nth-child(2)
      background #4e342e
      color #ffe0b2
</style>
