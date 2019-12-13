<template>
  <div class="personal">
    <!-- 我的上半部分 -->
    <div class="personal-top">
      <!-- 通知 -->
      <div class="content-top">
        <!-- <router-link to="/personal/inform">
          <span class="iconfont icon-lingdang"></span>
        </router-link> -->
        <span class="iconfont icon-lingdang" @click="$router.push('/personal/inform')"></span>
      </div>
      <!-- 用户信息 -->
      <div class="userMsg">
        <!-- 用户名 -->
        <div class="user">
          <p class="bigFont">游客用户0987</p>
          <p class="smallImg">
            <img src="./images/02.png" alt="">
          </p>
        </div>
        <!-- 用户头像 -->
        <div class="userHead">
          <img src="./images/01.jpg" alt="">
          <i> &gt; </i>
        </div>
      </div>
      <ul class="content-bottom">
        <li class="content-list" @click="$router.push('/personal/coupon')">
          <div>
            <p class="black">0</p>
            <p>我的点券</p>
          </div>
          <i> &gt; </i>
        </li>
        <li class="content-list" @click="$router.push('/personal/integral')">
          <div>
            <p class="black">0</p>
            <p>我的积分</p>
          </div>
          <i> &gt; </i>
        </li>
      </ul>
    </div>
    <!-- 我的下半部分 -->
    <ul class="personal-bottom">
      <li class="personal-list">
        <span class="list-left iconfont icon-qiaquan"></span>
        <span class="list-content">我的卡券</span>
        <i class="list-right"> &gt; </i>
      </li>
      <li class="personal-list">
        <span class="list-left iconfont icon-shenhebijijishibenxiezi"></span>
        <span class="list-content">我的笔记</span>
        <i class="list-right"> &gt; </i>
      </li>
      <li class="personal-list">
        <span class="list-left iconfont icon-xingxing"></span>
        <span class="list-content">我的收藏</span>
        <i class="list-right"> &gt; </i>
      </li>
      <li class="personal-list">
        <span class="list-left iconfont icon-bao"></span>
        <span class="list-content">我的订单</span>
        <i class="list-right"> &gt; </i>
      </li>
      <li class="personal-list">
        <span class="list-left iconfont icon-wenhao"></span>
        <span class="list-content">咨询反馈</span>
        <i class="list-right"> &gt; </i>
      </li>
      <li class="personal-list">
        <span class="list-left iconfont icon-guanyuwomen"></span>
        <span class="list-content">关于我们</span>
        <i class="list-right"> &gt; </i>
      </li>
      <li class="personal-list">
        <span class="list-left iconfont icon-shezhi"></span>
        <span class="list-content">设置</span>
        <i class="list-right"> &gt; </i>
      </li>
      <li class="personal-list">
        <span class="list-left iconfont icon-qiaquan"></span>
        <span class="list-content">组长专用通道</span>
        <i class="list-right"> &gt; </i>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.personal
  width 100%
  .personal-top
    width 100%
    background-color #5D9DFE
    .content-top
      text-align right
      span
        margin-right 20px
        font-size 30px
        color #BBD0F8
    .userMsg
      margin-top 50px
      display flex
      justify-content space-between
      padding-right 10px
      margin-bottom 50px
      .user
        margin-left 20px
        margin-top 20px
        .bigFont
          font-size 20px
          font-weight 500
          color #fff
          margin-bottom 10px
        .smallImg
          border-radius 5px
          img
            width 150px
            height 50px
      .userHead
        display flex
        line-height 100px
        img
          width 100px
          height 100px
          border-radius 50%
          margin-right 50px
        i
          color #BBD0F8
    .content-bottom
      display flex
      background-color #fff
      padding 30px
      .content-list
        display flex
        width 50%
        justify-content space-between
        align-items center
        padding 30px
        color #B8CAD6
        .black
          color #000
  .personal-bottom
    padding-left 20px
    padding-right 20px
    .personal-list
      height 80px
      line-height 80px
      &::after
        content ''
        height 0
        display block
        clear both
      .list-left
        margin-left 10px
        margin-right 10px
        color #BBD0F8
      .list-content
        color #454545
      .list-right
        color #BBD0F8
        float right
</style>
