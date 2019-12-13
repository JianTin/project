<template>
  <div id="outer">
    <div class="integral">
      <!-- 积分顶部 -->
      <div class="integral-top">
        <i @click="$router.back()"> &lt; </i>
        <span>我的积分</span>
        <span class="iconfont icon-qiaquan"></span>
        <div><b>0</b> <span>积分</span></div>
      </div>
      <!-- 积分内容 -->
      <div class="integral-content">
        <ul class="integral-slide">
          <div class="integral-title">
            <img src="../images/left.png" alt="">
            <h2>日常任务</h2>
            <img src="../images/right.png" alt="">
          </div>
          <li>
            <span>每日签到</span>
            <span>+1/次</span>
          </li>
          <li>
            <span>发布评论</span>
            <span>+3/次</span>
          </li>
          <li>
            <span>内容分享</span>
            <span>+5/次</span>
          </li>
          <div class="integral-title">
            <img src="../images/left.png" alt="">
            <h2>额外积分</h2>
            <img src="../images/right.png" alt="">
          </div>
          <li>
            <span>点券消费</span>
            <span>会员+15/点券,非会员+10/点券</span>
          </li>
          <li>
            <span>完善资料</span>
            <span>+50/次</span>
          </li>
          <li>
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
            <li>
              <img src="../images/money1.png" alt="">
              <Button type="info"></Button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { Button } from 'vant'
export default {
  components: {
    Button
  },
  mounted () {
    let scroll = new BScroll('.integral-content', {
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
      div
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
        li
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
</style>
