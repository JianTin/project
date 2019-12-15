<template>
  <div class="total">
    <header class="header">
      <span class="iconfont icon-right-copy"></span>
      <DropdownMenu class="DropdownMenu">
        <DropdownItem v-model="value"
                      :options="option"
                      class="DropdownItem" />
      </DropdownMenu>
    </header>
    <div class="month">
      <div class="month-item">
        <span class="twelveMonth">12月</span>
        <span>11月</span>
        <span>10月</span>
        <span>9月</span>
        <span>8月</span>
        <span>7月</span>
        <span>6月</span>
        <span>5月</span>
        <span>4月</span>
        <span>3月</span>
        <span>2月</span>
        <span>1月</span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../img/bigImg.jpg"
               alt="">
          <p>中国辣度</p>
          <span>2019.12.01 总期 552</span>
        </div>
        <div class="swiper-slide">
          <img src="../img/bigImg.jpg"
               alt="">
          <p>中国辣度</p>
          <span>2019.12.01 总期 552</span>
        </div>
        <div class="swiper-slide">
          <img src="../img/bigImg.jpg"
               alt="">
          <p>中国辣度</p>
          <span>2019.12.01 总期 552</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import datajs from '../../../mock/magazine/data.json'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { DropdownMenu, DropdownItem } from 'vant';
import BScroll from 'better-scroll'
export default {
  name: "Magazine",
  components: {
    DropdownMenu, DropdownItem
  },
  data () {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '2019', value: 0 },
        { text: '2018', value: 1 },
        { text: '2017', value: 2 },
        { text: '2016', value: 3 },
        { text: '2015', value: 4 },
        { text: '2014', value: 5 },
      ],
      magazines: [] //保存辣度数据
    }
  },
  mounted () {
    this.magazines = datajs.data
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,

      })

      // let MonthScroll = new BScroll('.month', {
      //   scrollX: true
      // })


    })


  }
}
</script>
<style lang="stylus" scoped>
.total
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  overflow hidden
  background-color #fff
  z-index 99
  .header
    display flex
    align-items center
    span
      margin-left 20px
    .DropdownMenu
      margin-left 250px
  .month
    width 100%
    padding-bottom 20px
    border-bottom 10px solid rgba(165, 222, 228, 0.2)
    .month-item
      display flex
      width 1250px
      .twelveMonth
        margin-left 30px
      span
        margin-left 70px
        font-size 12px
  .swiper-container
    width 100%
    height 100%
    .swiper-slide
      text-align center
      font-size 18px
      background #fff
      /* Center slide text vertically */
      transition 300ms
      transform scale(0.8)
      margin-top 100px
      img
        width 300px
        height 400px
        margin-top 30px
        box-shadow 5px 5px 20px #CCCCCC
      p
        margin-top 250px
      span
        margin-top 100px
        font-size 12px
    .swiper-slide-active, .swiper-slide-duplicate-active
      transform scale(1)
</style>