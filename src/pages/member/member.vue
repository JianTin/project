<template>
  <div class="scrollOuter" ref="scrollOuter" style="height: 100%">
    <div id='outer'>
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div id="swiper-left"></div>
          </div>
          <div class="swiper-slide">
            <div id="swiper-right"></div>
          </div>
        </div>
        <!-- Add Pagination -->
      </div>
      <!--外围的分页器-->
      <div class="swiper-pagination"></div>
       <!--会员的权益-->
      <Rights :level='level'/>
      <div id="Discount">
        <p class="title">会员专享折扣专区</p>
        <ul id="discountList">
          <li>

          </li>
        </ul>
      </div>
    </div>
    <!--测试使用-->
    <!-- <router-view/> -->
  </div>
</template>

<script>
// 轮播图
import Swiper from 'swiper'
// scroll
import BScroll from 'better-scroll'
import 'swiper/css/swiper.css'
import Rights from '../../components/Rights/Rights'
export default {
  components: { Rights },
  data () {
    return {
      // 用来显示 为 年卡 还是 月卡
      level: true
    }
  },
  mounted () {
    // this.$refs.scrollOuter.style.height = screen.height
    console.log(this.$refs.scrollOuter.style)
    // eslint-disable-next-line no-new
    new BScroll('.scrollOuter')
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      slidesPerView: 'auto', // 表示一个 slides 的宽度来设定数量。
      centeredSlides: true, // active slide会居中，而不是默认状态下的居左。
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'my-bullet', // 设置单个 分页器的样式
        bulletActiveClass: 'my-bullet-active' // 选中时的样式
      },
      uniqueNavElements: false, // 表示标签外的分页器也会生效
      // 事件回调
      on: {
        // 当滑屏时会触发
        slideChangeTransitionStart: () => {
          // 花屏显示不同的权限
          this.level = !this.level
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
// 设置 title的样式
.title
  font-weight 600
  font-size 17px
  margin-left 30px
//外部的scroll
.scrollOuter
  height 100%
  .swiper-container
    width 100%
    height 350px
    background #F3DEC8
    .swiper-slide
      text-align center
      font-size 18px
      background #fff
      /* Center slide text vertically */
      display flex
      justify-content center
      align-items center
      width 60%
      background white
      position relative
      &>div
        position absolute
        bottom 0
        height 80%
        width 100%
      #swiper-left
        background black
      #swiper-right
        background red
  .swiper-pagination
    margin-top 20px
    display flex
    justify-content center
    width 100%
    height 40px
    /deep/ .my-bullet
      width 22px
      height 5px
      margin 0 5px
      background #cccc
    /deep/ .my-bullet-active
      background black
  #Discount
    height 1000px
</style>
