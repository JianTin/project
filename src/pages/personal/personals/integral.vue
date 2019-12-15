<template>
  <div id="outer">
    <div class="integral">
      <!-- 积分顶部 -->
      <div class="integral-top">
        <div class="integral-top-title">
          <i @click="$router.back()"> &lt; </i>
          <span>我的积分</span>
          <span class="iconfont icon-qiaquan"></span>
        </div>
        <div class="integral-top-content"><b>0</b> <span>积分</span></div>
      </div>
      <!-- 积分内容 -->
      <div class="integral-content">
        <ul class="integral-slide">
          <div class="integral-title">
            <img src="../images/left.png" alt="">
            <h2>日常任务</h2>
            <img src="../images/right.png" alt="">
          </div>
          <li class="integral-list">
            <span>每日签到</span>
            <span>+1/次</span>
          </li>
          <li class="integral-list">
            <span>发布评论</span>
            <span>+3/次</span>
          </li>
          <li class="integral-list">
            <span>内容分享</span>
            <span>+5/次</span>
          </li>
          <div class="integral-title">
            <img src="../images/left.png" alt="">
            <h2>额外积分</h2>
            <img src="../images/right.png" alt="">
          </div>
          <li class="integral-list">
            <span>点券消费</span>
            <span>会员+15/点券,非会员+10/点券</span>
          </li>
          <li class="integral-list">
            <span>完善资料</span>
            <span>+50/次</span>
          </li>
          <li class="integral-list">
            <span>生日翻倍</span>
            <span>年卡会员1次/年</span>
          </li>
          <p style="margin-top:15px;">积分获取规则说明:</p>
          <p>1、完善个人资料一次性获得50积分,后续更改信息将不再给予奖励</p>
          <p>2、每天可通过签到、评论、分享获得的积分上限为20分,年卡会员生日当天上限可提高至40分</p>
          <p>3、每位用户积分上限为100000分</p>
          <div class="integral-title">
            <img src="../images/left.png" alt="">
            <h2>积分兑换</h2>
            <img src="../images/right.png" alt="">
          </div>
          <ul class="integral-credits-exchange">
            <li class="integral-credits-exchange-list">
              <img src="../images/money1.png" alt="">
              <div class="btn">500积分兑换</div>
            </li>
            <li class="integral-credits-exchange-list">
              <img src="../images/money3.png" alt="">
              <div class="btn">1000积分兑换</div>
            </li>
            <li class="integral-credits-exchange-list">
              <img src="../images/money5.png" alt="">
              <div class="btn">2000积分兑换</div>
            </li>
            <li class="integral-credits-exchange-list">
              <img src="../images/money10.png" alt="">
              <div class="btn">5000积分兑换</div>
            </li>
          </ul>
          <p>积分兑换券规则说明：</p>
          <p>1、每张券有效期为一个月，且不可叠加使用(每次购买商品只能使用一张券)</p>
          <p>2、用户积分将在当年12月31日统一清零，请在有效期内兑换权益</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  mounted () {
    this.scroll = new BScroll('.integral-content', {
      scrollY: true,
      click: true
    })
    console.log(scroll)
  }
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
  .integral
    width 100%
    height 100%
    .integral-top
      width 100%
      height 30%
      background url('../images/blue_bj.png')
      text-align center
      padding-top 10px
      color #fff
      position relative
      .integral-top-title
        height 80px
        line-height 80px
        i
          font-size 20px
          color #BBD0F8
          font-weight 700
          float left
          margin-left 20px
        .iconfont
          float right
          margin-right 20px
          margin-top 8px
      .integral-top-content
        position absolute
        left 50%
        top 50%
        transform translateX(-50%) translateY(-50%)
        b
          font-size 30px
          font-weight 700
        span
          font-size 12px
    .integral-content
      width 100%
      height 70%
      .integral-slide
        width 100%
        padding 0 20px
        background-color #fff
        .integral-title
          display flex
          margin-top 20px
          margin-left 25%
        .integral-list
          display flex
          justify-content space-between
          border-bottom 1px solid #B8CAD6
          height 100px
          line-height 100px
          span:nth-child(2)
            color #B8CAD6
            font-size 12px
        p
          color #B8CAD6
          line-height 50px
        .integral-credits-exchange
          width 100%
          display flex
          justify-content space-between
          flex-wrap wrap
          .integral-credits-exchange-list
            width 45%
            img
              padding 10px
            .btn
              width 80%
              height 50px
              color #fff
              background-color #5D9DFE
              border-radius 30px
              text-align center
              line-height 50px
              margin 35px
</style>
