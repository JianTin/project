<template>
  <div class="container">
    <header class="header">
      <div class="logo"><img src="./img/logo.png"
             alt=""></div>
      <div class="iconfont icon-sousuo search"></div>
    </header>
    <div class="total-conter">
      <div class="total">
        <!-- 头部样式 -->
        <!-- 时间 -->
        <div class="time">
          <span class="data">DATA</span>
          <div class="time_year">2019.12.12</div>
        </div>
        <!-- 轮播图 -->
        <div class="swiper">
          <div class="swiper-container banner">
            <div class="swiper-wrapper banner-body">
              <div class="swiper-slide banner-Item"
                   v-for="(banner,index) in bannerList"
                   :key="index">
                <h1 class="swiper-title">{{banner.title}}</h1>
                <img :src='banner.imageUrl'
                     alt="">
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 导航条 -->
        <nav class="nav">
          <div class="tab special">
            <span class="iconfont icon-yanjing1"></span>
            <p>专题</p>
          </div>
          <div class="tab magazine"
               @click="($router.push('/home/magazine'))">
            <span class="iconfont icon-zazhiqikan"></span>
            <p>杂志</p>
          </div>
          <div class="tab music" @click="$router.push('/home/audio')">
            <span class="iconfont icon-yinpin"></span>
            <p>音频</p>
          </div>
          <div class="tab literature">
            <span class="iconfont icon-pencil"></span>
            <p>文创</p>
          </div>
          <div class="tab psychology">
            <span class="iconfont icon-xinlifudao"></span>
            <p>大学心里</p>
          </div>
        </nav>
        <!-- 内容 -->
        <div class="content"
             v-if="viewList.viewList">
          <!-- 内容大图区域 -->
          <div class="contentItem-first">
            <img src="./img/bigimg.jpg"
                 alt="">
            <p class="first-title">{{moduleList[0].viewList[0].articleList[0].title}}</p>
            <div class="contentItem-mid">
              <div class="contentItem-list"
                   v-for="(view,index) in moduleList[0].viewList[0].articleList"
                   :key="index"
                   v-show="id!==view.articleId">
                <span class="shopTitle"> 「{{view.action}}」</span>
                <span class="shopBody">{{view.title}}</span>
              </div>
            </div>
          </div>
          <!-- 商品列表 -->
          <div class="shop">
            <img src="./img/shop.jpg"
                 alt="">
            <div class="shopBody">
              <div class="shopItem">
                <div class="shopList">
                  <div class="shopsList"
                       v-for="(shop,index) in shop"
                       :key="index">
                    <img class="shopImg"
                         :src="shop.imageUrl"
                         alt="">
                    <p class="money">{{shop.cName}}</p>
                    <div class="vipItem">
                      <span class="price">¥299</span>
                      <span class="memberPrice">会员¥269</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- 内容小大图区域 -->
          <div class="contentItem-two">
            <div class="border"
                 v-for="(module,index) in moduleList"
                 :key="index ">
              <div class="short"
                   v-if="module.moduleType===41">
                <div class="shortItem">
                  <div class="shortItem-small"
                       v-if="module.article.setType===1">
                    <div class="shortItem-word">
                      <h3>{{module.article.title}}</h3>
                      <p>{{module.article.authorName}}</p>
                    </div>
                    <img class="smallImg"
                         :src="module.article.coverImg"
                         alt="">
                  </div>
                  <div class="shortItem-big"
                       v-if="module.article.setType===2">
                    <img class="bigImg"
                         :src="module.article.coverImg"
                         alt="">
                    <div class="shortItem-wordOne">
                      <h3>{{module.article.title}}</h3>
                      <p>{{module.article.authorName}}</p>
                    </div>
                  </div>
                  <div class="shortItem-icon">
                    <i class="iconfont icon-liuyan speak"></i>
                    <span>{{module.article.commentNum}}</span>
                    <i class="iconfont icon-zan lick">
                    </i>
                    <span>{{module.article.likeNum}}</span>
                    <i class="iconfont icon-chakan view"></i>
                    <span>{{module.article.viewNum}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
// 引入swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
// 引入scroll
import BScroll from 'better-scroll'
import data from '../../mock/data.json'
export default {
  data () {
    return {
      bannerList: [], // 用来保存bannerList数据 默认是个空数组
      moduleList: [], // 用来保存内容区域的数据 默认是个空数组
      viewList: [],
      shops: [],
      moudule: {},
      id: 'shp1047626658'
    }
  },
  mounted () {
    // 将data数据保存到bannerList
    if (data) {
      this.bannerList = data.data.bannerList
      this.moduleList = data.data.moduleList
      this.viewList = this.moduleList[0]
    }

    this.moduleList.forEach((li, index) => {
      if (li.moduleType === 3) {
        console.log(li.commodityRecommendList)
        const shop = li.commodityRecommendList
        this.shop = shop
      }
    })

    // 实例化Swiper
    this.$nextTick(() => {
      this._initHomeswiper()

      this.shopScroll = new BScroll('.shopItem', {
        scrollX: true
      })
      if (!this.scroll) {
        this.scroll = new BScroll('.total-conter', {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },
  methods: {
    _initHomeswiper () {
      new Swiper('.banner', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  background-color #ccc
  .header
    position fixed
    top 0
    width 100%
    z-index 1
    background-color #fff
    .logo
      margin-left 20px
      margin-top 20px
      display inline-block
      img
        width 100px
        height 50px
    .search
      float right
      margin-top 20px
      margin-right 20px
      font-size 20px
.total-conter
  width 100%
  height 100%
  background-color #fff
  .total
    width 100%
    overflow hidden
    .time
      margin-top 100px
      width 220px
      display inline-block
      border 1px solid #000
      padding-left 5px
      border-left 15px solid #000
      height 30px
      display flex
      align-items center
      margin-left 20px
      font-size 12px
      .time_year
        text-align center
        height 20px
        line-height 23px
        text-align center
        font-size 12px
        display inline-block
        border-left 3px solid #000
        margin-left 20px
        padding-left 10px
    .swiper
      width 100%
      height 550px
      margin-top 20px
      margin-left 30px
      .banner
        width 100%
        height 100%
        .banner-body
          width 100%
          height 100%
          .banner-Item
            width 100%
            height 100%
            h1
              font-size 20px
              min-height 120px
            img
              width 670px
              margin-top 10px
    .nav
      margin-top 30px
      display flex
      .tab
        display flex
        flex-direction column
        align-items center
        margin-left 73px
        span
          font-size 25px
        p
          font-size 12px
    .contentItem-first
      width 100%
      height 100%
      margin-top 25px
      .first-title
        font-size 20px
        margin-left 50px
        margin-top 20px
      .contentItem-mid
        border-top 1px solid #CCC
        margin 20px 20px 0
        .contentItem-list
          margin-left 20px
          margin-top 20px
          font-size 13px
          color #2f2f4f
    .shop
      width 100%
      margin-top 20px
      border-top 20px solid #ccc
      .shopBody
        width 100%
        display flex
        .shopItem
          width 100%
          .shopList
            display flex
            width 1500px
            .shopsList
              text-align center
              width 260px
              height 380px
              margin-left 30px
              box-shadow 0px 1px 4px #CCCCCC
              display flex
              flex-direction column
              .vipItem
                text-align center
                display flex
                justify-content center
              .shopImg
                width 260px
                height 220px
              .money
                font-size 12px
                text-align center
                margin-top 20px
                display -webkit-box
                overflow hidden
                white-space normal !important
                text-overflow ellipsis
                word-wrap break-word
                -webkit-line-clamp 2
                -webkit-box-orient vertical
            .vipItem
              margin-top 20px
              .price
                text-align center
                font-size 12px
                margin-right 10px
                color rgb(46, 169, 223)
                font-size 14px
              .memberPrice
                text-align center
                background-image linear-gradient(to right, silver, #2f4f4f)
                color #fff
                font-size 8px
                border-radius 5px
    .contentItem-two
      width 100%
      height 100%
      margin-bottom 100px
      margin-top 30px
      border-top 15px solid rgba(192, 192, 192, 0.5)
      .border
        margin-top 30px
        .short
          width 100%
          .shortItem
            width 100%
            padding-bottom 20px
            border-bottom 2px solid #ccc
            margin-left 20px
            .shortItem-small
              width 100%
              display flex
              .smallImg
                width 300px
                height 200px
                flex 1
                margin-left 20px
              .shortItem-word
                display flex
                flex-direction column
                flex 1
                font-size 16px
                margin-left 30px
                p
                  font-size 12px
                  color #336699
                  margin-top 30px
            .shortItem-icon
              width 100%
              margin-top 30px
              i
                vertical-align middle
                font-size 20px
                margin-left 30px
              span
                vertical-align middle
                font-size 12px
                margin-left 10px
              .view
                margin-left 340px
            .shortItem-big
              width 100%
              display flex
              flex-direction column
              .shortItem-wordOne
                font-size 16px
                margin-left 30px
                margin-top 30px
                p
                  color #336699
                  font-size 12px
                  margin-top 20px
              .bigImg
                width 700px
                height 320px
                margin-left 30px
</style>
>>>>>>> YHF
