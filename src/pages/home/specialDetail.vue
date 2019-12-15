<template>
  <div id="outer">
    <div class="specialDetail">
      <div class="specialDetail-title">
        <span class="iconfont icon-right-copy" style="opacity:1;" @click="$router.back()"></span>
        <h2>硬核读书会</h2>
      </div>
      <div class="specialDetail-container">
        <div class="specialDetail-content">
          <div class="specialDetail-silde">
            <div class="specialDetail-one">
              <img src="./images/zhuanti-img.png" alt="">
            </div>
            <div class="specialDetail-list">
              <div class="specialDetail-bj"></div>
              <img src="./images/zhuanti-img.png" alt="">
              <p class="specialDetail-text"><span class="iconfont icon-quotation"></span>人生海海向何处?我们和作家麦家聊了聊 </p>
              <p class="specialDetail-txt">它架空的是过去或未来,神官的却是现在</p>
            </div>
            <div class="specialDetail-list">
              <div class="specialDetail-bj"></div>
              <img src="./images/zhuanti-img.png" alt="">
              <p class="specialDetail-text"><span class="iconfont icon-quotation"></span>人生海海向何处?我们和作家麦家聊了聊 </p>
              <p class="specialDetail-txt">它架空的是过去或未来,神官的却是现在</p>
            </div>
            <div class="specialDetail-list">
              <div class="specialDetail-bj"></div>
              <img src="./images/zhuanti-img.png" alt="">
              <p class="specialDetail-text"><span class="iconfont icon-quotation"></span>人生海海向何处?我们和作家麦家聊了聊 </p>
              <p class="specialDetail-txt">它架空的是过去或未来,神官的却是现在</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {reqSpecial} from '../../api'
import BScroll from 'better-scroll'
export default {
  // data () {
  //   return {
  //     datas: []
  //   }
  // },
  async mounted () {
  //   const result = await reqSpecial()
  //   // 请求成功将数据保存在状态数据中
  //   if (result.data.code === 200) {
  //     this.datas = result.data.data.map(item => item.articleList)
  //   }
  //   const list = this.datas.map(item => item.map(item => item.data.list))
  // 滚动
    this.scroll2 = new BScroll('.specialDetail-container', {
      scrollY: true,
      click: true
    })
    console.log('123')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#outer
  width 100%
  height 100%
  background-color #fff
  position absolute
  top 0
  left 0
  z-index 100
  .specialDetail
    width 100%
    height 100%
    overflow hidden
    .specialDetail-title
      width 100%
      height 100px
      display flex
      align-items center
      border-bottom 1px solid #F2F2F2
      position absolute
      top 0
      z-index 3
      background-color #fff
      opacity 0
      span
        font-size 30px
        margin-left 20px
      h2
        margin 0 auto
    .specialDetail-container
      width 100%
      height 100%
      .specialDetail-content
        .specialDetail-silde
          .specialDetail-one
            width 100%
            height 200px
            overflow hidden
            // margin-bottom 20px
            img
              width 100%
          .specialDetail-list
            width 100%
            .specialDetail-bj
              width 100%
              height 25px
              background-color #e2e2e2
            img
              width 100%
              height 300px
            .specialDetail-text
              font-weight 600
              font-size 18px
              vertical-align super
              margin 20px 20px
            .specialDetail-txt
              color #d2d2d2
              margin 20px 0 40px 50px
</style>
