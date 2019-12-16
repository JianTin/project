<template>
  <section class="detail">
    <div class="header"
         ref="headHeight">
      <div class="left"
           @click="$router.back()">
        <span class="icon1 iconfont icon-right-copy"></span>
      </div>
      <span class="detailTitle"
            v-show="isShowDetail">商品详情</span>
      <div class="right">
        <span class="icon2 iconfont icon-zhuanfa1"></span>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="detail-wrapper"
         ref="detailWrapper">
      <div class="detail-content">
          <img :src="detail.imageUrl"
             alt=""
             ref="imgHeight">
        <div class="message">
          <div class="priceOuter">
            <span class="price">￥{{detail.shoppPrice}}</span>
            <span class="memberPrice">会员￥{{detail.memberPrice}}</span>
          </div>
          <div class="openMember" @click="$router.replace('/member')">
            <img src="./images/member.jpg"
                 alt="">
          </div>
          <div class="title">
            <p class="nameBig">{{detail.cName}}</p>
            <p class="nameSmall">{{detail.cName}}</p>
            <p class="freight">运费：￥10元起</p>
          </div>
        </div>
        <div class="picture-text">
          <div>
            <span></span>
            <p class="text">图文详情</p>
            <span></span>
          </div>
        </div>
        <div class="imgDetail">
          <img src="http://lifeschool.oss-cn-shenzhen.aliyuncs.com/Matching/2019/50cd8a931e504f499accb5a4990d577d.jpg"
               alt="">
        </div>
      </div>
    </div>
    <!-- 底部购物 -->
    <div class="footer">
      <p>
        <Icon name="shopping-cart-o"
              :info="totalCount>0?totalCount:''"
              @click="$router.push('/home/shopCar')"
              size="1.5em" />
        <img @click="isCollection=!isCollection"
             :src="isCollection?collection:xing"
             alt="">
      </p>
      <p class="joinCar"
         @click="showMask(1)">加入购物车</p>
      <p @click="showMask(2)"
         class="buyNow">立即购买</p>
    </div>
    <!-- 点击添加到购物车和立即购买出现 -->
    <transition name="fade">
      <div class="carCard"
           v-show="isShowMask">
        <!-- 图片 简介 -->
        <div class="picture">
          <img :src="detail.imageUrl"
               alt="">
          <div class="content">
            <p>{{detail.cName}}</p>
            <p class="price">价格：￥{{detail.shoppPrice}}</p>
          </div>

          <!-- 点击叉叉 消失-->
          <span @click="hideMask"
                class="icon iconfont icon-cha"></span>
        </div>
        <!-- 商品规格 -->
        <div class="selectStandard">
          <p>请选择商品规格</p>
          <ul class="standardList">
            <li class="standardItem"
                v-for="(item,index) in standardList"
                :key="index"
                @click="changeStandard(index)"
                :class="{active:isSelectStandardIndex===index}">
              {{item}}
            </li>
          </ul>
        </div>
        <!-- 购买数量 -->
        <div class="buyCount">
          <span>购买数量</span>
          <Stepper button-size="28px"
                   input-width="30px"
                   v-model="shopCount" />
        </div>
        <!-- 确定 -->
        <div class="sure"
             @click="handleSure">确定</div>
      </div>
    </transition>
    <!-- 蒙版 -->
    <div class="joinCar-mask"
         v-show="isShowMask"
         @click="hideMask">
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll'
import collection from './images/collection.png'
import xing from './images/xing.png'
import { Icon, Stepper } from 'vant'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'goodDetail',
  data () {
    return {
      detail: {}, // 当前的商品数据
      isShowDetail: false, // 滚动时显示商品详情四个字
      isCollection: false, // 是否收藏
      collection,
      xing,
      isShowMask: false, // 显示蒙版
      shopCount: 1, // 购买数量
      isSelectStandardIndex: 0,
      standardList: [// 商品规格
        '主图款',
        'iphone7/8/9/x/xs/xr'
      ],
      type: 1 // 是加入购物车还是立即购买
    }
  },
  components: { Icon, Stepper },
  watch: {},
  computed: {
    ...mapState({
      cartgoods: state => state.shop.cartgoods
    }),
    ...mapGetters(['totalCount'])
  },
  mounted () {
    // 获取数据
    this.detail = JSON.parse(this.$route.query.detail)
    this.index = this.$route.query.index
    this.initScroll()
  },
  methods: {
    // 初始化滚动条
    initScroll () {
      this.$nextTick(() => {
        this.detailScroll = new BScroll('.detail-wrapper', {
          click: true,
          probeType: 2,
          scrollY: true
        })
        this.detailScroll.on('scroll', (pos) => {
          var tops = this.$refs.imgHeight.offsetHeight - this.$refs.headHeight.offsetHeight
          // 使用abs绝对值（否则 pos.y拿到值是负数）
          this.scrollY = Math.abs(Math.round(pos.y))
          if (this.scrollY >= tops) {
            this.isShowDetail = true
            this.$refs.headHeight.style.backgroundColor = '#fff'
          } else {
            this.isShowDetail = false
            this.$refs.headHeight.style.backgroundColor = 'transparent'
          }
        })
      })
    },
    // 点击加入购物车或立即购买
    showMask (type) {
      this.isShowMask = !this.isShowMask
      this.type = type
    },
    // 点击规格触发事件
    changeStandard (index) {
      this.isSelectStandard = true
      this.isSelectStandardIndex = index
    },
    // 点击叉叉和蒙版,让所有数据还原
    hideMask () {
      this.isShowMask = false
      this.isSelectStandardIndex = 0
      this.shopCount = 1
    },
    handleSure () {
      if (this.type === 1) {
        // 加入购物车
        if (this.cartgoods.find(item => item.numberId === this.detail.numberId)) {
          this.hideMask()
          return// 如果购物车中有该商品
        }
        this.$store.dispatch('updateGoodCount', { good: this.detail, count: this.shopCount })
        this.hideMask()
      } else {
        // 立即购买
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.detail
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  background white
  .header
    top 0
    left 0
    height 90px
    overflow hidden
    color #000
    position fixed
    z-index 200
    background-color white
    width 100%
    line-height 90px
    text-align center
    .left
      float left
      width 50px
      height 50px
      border-radius 50%
      margin-top 20px
      background-color rgba(255, 255, 255, 0.5)
      text-align center
      line-height 50px
      margin-left 30px
      font-weight 700
    .right
      float right
      margin-top 20px
      margin-right 30px
      width 50px
      height 50px
      border-radius 50%
      background-color rgba(255, 255, 255, 0.5)
      text-align center
      line-height 50px
      span
        font-size 12px
        font-weight 700
        &.icon2
          font-size 14px
    .detailTitle
      font-size 16px
      font-weight 700
  .detail-wrapper
    height 1245px
    margin-bottom 100px
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 150;
    .detail-content
      width 100%
      position absolute
      top 0
      left 0
      img
        width 100%
        height 600px
      .message
        width 100%
        padding 20px
        background-color #ffffff
        padding-bottom 34px
        border-bottom 12px solid #eee
        .priceOuter
          width 100%
          vertical-align middle
          .price
            color #007fff
            font-size 22px
            margin-right 10px
            margin-top 3px
            vertical-align middle
            font-weight 700
          .memberPrice
            background-image linear-gradient(to right, silver, #2f4f4f)
            color #fff
            font-size 14px
            border-radius 5px
            vertical-align middle
            padding 0 5px
        .openMember
          width 100%
          margin-top 20px
          img
            width 100%
            height 60px
            border-radius 5px
        .title
          margin-top 10px
          width 100%
          .nameBig
            font-weight 700
            font-size 15px
          .nameSmall
            font-size 13px
            margin 10px 0 10px 0
            color #999
          .freight
            margin-top 25px
            color #999
            font-size 12px
      .picture-text
        margin-top 30px
        margin-bottom 10px
        display flex
        justify-content center
        div
          display flex
          span
            width 50px
            height 2px
            background-color #c0c0c0
            margin 16px 8px 0 8px
          .text
            font-size 12px
            color #c0c0c0
      .imgDetail
        margin-bottom 100px
        width 100%
        img
          width 100%
          height 100%
  .footer
    width 100%
    height 100px
    position absolute
    bottom 0
    left 0
    background-color #fff
    display flex
    z-index 150
    p
      height 100%
      width 100%
      padding 0 40px
      flex 1
      display flex
      align-items center
      justify-content center
      font-size 14px
      .van-icon-shopping-cart-o:before
        width 20px
      .van-icon-shopping-cart-o
        color #000
        margin-right 30px
      img
        width 50px
        height 50px
      &.joinCar
        background-color #c0d9d9
        color #007fff
      &.buyNow
        background-color #007fff
        color #fff
  .carCard
    position absolute
    left 0
    bottom 0
    z-index 200
    width 100%
    height 700px
    padding 30px
    background-color #fff
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      transform translateY(100%)
    .picture
      display flex
      height 150px
      img
        width 150px
        height 150px
      .content
        margin 0 20px
        width 420px
        margin-top 70px
        letter-spacing 1px
        font-size 13px
        p
          ellipsis-one()
          &.price
            margin-top 10px
            font-size 12px
      .icon
        position absolute
        right 30px
        top 30px
        color #999
    .selectStandard
      margin 40px 0 30px 0
      p
        font-size 13px
        letter-spacing 1px
      .standardList
        margin-top 20px
        display flex
        flex-wrap wrap
        .standardItem
          background-color #e9e9e9
          border-radius 5px
          font-size 12px
          margin 10px 10px
          padding 5px 10px
          border 1px solid #e9e9e9
          &.active
            border-color #007fff
            color #007fff
            background-color #fff
    .buyCount
      font-size 13px
      letter-spacing 1px
      display flex
      justify-content space-between
      margin-top 50px
    .sure
      border-radius 5px
      width 100%
      height 70px
      text-align center
      line-height 70px
      color #fff
      background #007fff
      margin-top 100px
  .joinCar-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 150
    backdrop-filter blur(10px)
    opacity 1
    background rgba(0, 0, 0, 0.3)
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
</style>
