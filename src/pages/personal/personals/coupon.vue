<template>
  <div id="outer">
    <div class="coupon">
      <!-- 顶部 -->
      <div class="coupon-top">
        <i @click="$router.back()"> &lt; </i>
        <span>我的点券</span>
        <span class="iconfont icon-qiaquan"></span>
        <div><b>0</b> <span>点券</span></div>
      </div>
      <!-- 内容 -->
      <div class="coupon-content">
        <div class="coupon-content-top">充值点券</div>
        <!-- 充值 -->
        <div class="coupon-content-img">
          <div class="coupon-content-img-top" ref="active">
            <div class="coupon-content-money active" @click="switchAction">
              <p>6点券</p>
              <p>6元</p>
            </div>
            <div class="coupon-content-money" @click="switchAction">
              <p>30点券</p>
              <p>30元</p>
            </div>
            <div class="coupon-content-money" @click="switchAction">
              <p>68点券</p>
              <p>68元</p>
            </div>
            <div class="coupon-content-money" @click="switchAction">
              <p>128点券</p>
              <p>128元</p>
            </div>
          </div>
          <!-- <div class="coupon-content-img-bottom"> -->

          <!-- </div> -->
        </div>
        <ul class="coupon-content-explain">
          <li>充值说明:</li>
          <li>1.充值比例: 人命币1元=1点券</li>
          <li>2.IOS设备与其他终端设备上的充值不能相互通用</li>
          <li style="margin-bottom:10px;">3.点券为虚拟币,充值成功后无法提现或转赠</li>
          <li>4.充值失败是请加客服微信(微信ID:guguji2016)或给公众号"新周刊"留言</li>
        </ul>
        <Button type="info" style="width:100%;position:absolute;bottom:50px;">确认支付{{money}}</Button>
      </div>
    </div>
  </div>
</template>
<script>

import { Button } from 'vant'

export default {
  components: {
    Button
  },
  data () {
    return {
      money: '6元'
    }
  },
  methods: {
    switchAction (event) {
      // 清楚active样式
      Array.from(this.$refs.active.children).forEach((item, index) => {
        item.classList.remove('active')
      })
      // 添加active样式
      if (event.target.nodeName === 'P') {
        event.target.parentNode.classList.add('active')
      }
      // 按钮上显示的金额
      this.money = event.target.innerHTML
    }
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
  .coupon
    width 100%
    height 100%
    .coupon-top
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
    .coupon-content
      padding 0 20px
      .coupon-content-top
        height 80px
        line-height 80px
        text-align center
        font-weight 700
        font-size 14px
      .coupon-content-img
        width 100%
        .coupon-content-img-top
          display flex
          width 100%
          justify-content space-between
          flex-wrap wrap
          .coupon-content-money
            width 45%
            height 120px
            border 1px solid #C5CCD7
            border-radius 10px
            text-align center
            line-height 60px
            color #C5CCD7
            margin-bottom 20px
            &.active
              color #5D9DFE
              border 2px solid #5D9DFE
        /* .coupon-content-img-bottom
        display flex
        justify-content center
        align-items center
        .coupon-content-money
          width 45%
          height 120px
          border 1px solid #C5CCD7
          border-radius 10px
          text-align center
          line-height 60px
          color #C5CCD7 */
      .coupon-content-explain
        font-size 14px
</style>
