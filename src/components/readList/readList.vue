<template>
  <div id="readOuter">
    <!--音频轮播图-->
    <div class="swiper-container"
         id="swiper-read-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item,index) in bannerList"
             :key="index">
          <img :src="item.imageUrl"
               :alt="item.title">
        </div>
      </div>
      <div class="swiper-pagination"
           id="read-pagination"></div>
    </div>
    <!--新周刊音频-->
    <div id="newWeekly"
         v-if="this.newModule.moduleName">
      <div id='weeklyTitle'>
        <p class="title">{{this.newModule.moduleName}}</p>
        <p class="titleRight">
          <span>全部</span>
          <span class="iconfont icon-icon1"></span>
        </p>
      </div>
      <ul id="listOuter">
        <li v-for="(item,index) in this.newModule.readMagazineList"
            :key="index">
          <img :src="item.coverImg"
               :alt="item.readingTitle">
          <span class="time">2019.12.01 552</span>
          <p class="price">
            <span>￥{{item.readingPrice}}</span>
            <span>会员￥{{item.memberPrice}}</span>
          </p>
        </li>
      </ul>
    </div>
    <!--推荐轮播图-->
    <div id="recommended"
         v-if="this.hotModule.moduleName">
      <p class="title">{{this.hotModule.moduleName}}</p>
      <div class="swiper-container"
           id="swiper-read-bottom">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(item,index) in this.hotModule.readCommendList"
               :key="index">
            <img :src="item.coverImg"
                 alt="">
          </div>
        </div>
      </div>
      <div id="bck"></div>
    </div>
    <div class="bck"></div>
  </div>
</template>

<script>
// 轮播图
import Swiper from 'swiper'
// 轮播图的样式
import 'swiper/css/swiper.css'
import { mapState } from 'vuex'
export default {
  mounted () {
    // 当有数据时 才进行new 的操纵
    if (this.bannerList.length > 0) {
      this.$nextTick(() => {
        this.initSwiper()
      })
    }
  },
  beforeUpdate () {
    // 当 没有 swiperTop 这个 对象 并且 数据请求回来进行渲染轮播图
    if (!this.swiperTop && this.bannerList.length > 0) {
      // 等待DOM渲染完毕 再渲染轮播图
      this.$nextTick(() => {
        this.initSwiper()
      })
    }
  },
  computed: {
    ...mapState({
      bannerList: state => state.reads.bannerList,
      hotModule: state => state.reads.hotModule,
      newModule: state => state.reads.newModule
    })
  },
  methods: {
    initSwiper () {
      // eslint-disable-next-line no-new
      this.swiperTop = new Swiper('#swiper-read-top', {
        loop: true,
        pagination: {
          el: '#read-pagination',
          bulletElement: 'li',
          bulletClass: 'read-bullet',
          bulletActiveClass: 'read-bullet-active'
        }
      })
      // eslint-disable-next-line no-new
      new Swiper('#swiper-read-bottom', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        loop: true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../comm/maxi.styl'
.title
  member-font()
#readOuter
  #swiper-read-top
    width 100%
    height 250px
    .swiper-slide
      height 250px
      text-align center
      font-size 18px
      background #fff
      display flex
      justify-content center
      align-items center
      img
        width 100%
        height 100%
    #read-pagination
      width 100%
      display flex
      justify-content center
    /deep/ .read-bullet
      width 30px
      height 5px
      background #eee
      margin 0 10px
    /deep/ .read-bullet-active
      background #616161
  #newWeekly
    margin-top 20px
    background #fff
    #weeklyTitle
      height 80px
      display flex
      justify-content space-between
      align-items center
      .title
        margin-left 20px
        font-weight 600
        font-size 16px
      .titleRight
        display flex
        color #c8d6e5
        span
          display flex
          align-items center
          margin 0 10px
          &:nth-child(1)
            font-size 12px
            margtin-right 10px
          &:nth-child(2)
            color #8395a7
    #listOuter
      display flex
      flex-wrap wrap
      width 100%
      justify-content space-around
      li
        display flex
        flex-direction column
        margin 10px 20px
        img
          width 130px
          height 180px
          border-radius 5px
          overflow hidden
        .time
          margin-top 5px
          letter-spacing 0.2px
          font-size 5px
        .price
          margin-top 5px
          display flex
          align-items center
          margin-left 5px
          span
            &:nth-child(1)
              color $blue
              font-size 12px
            &:nth-child(2)
              linear()
              transform scale(0.6)
              margin-left -5px
              width 100px
              font-size 5px
              display flex
              align-items center
              justify-content center
  #recommended
    width 100%
    background white
    margin-top 20px
    overflow hidden
    .title
      margin-top 20px
  #swiper-read-bottom
    margin-top 20px
    width 100%
    height 100%
    .swiper-slide
      border-radius 10px
      overflow hidden
      height 200px
      text-align center
      font-size 18px
      background #fff
      width 80%
      display flex
      justify-content center
      align-items center
  .bck
    height 110px
    background white
</style>
