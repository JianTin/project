<template>
  <div class="container">
    <header class="header">
      <span class="iconfont icon-right-copy"
            @click="($router.back())"></span>
      <DropdownMenu class="DropdownMenu">
        <DropdownItem v-model="value"
                      :options="option"
                      class="DropdownItem" />
      </DropdownMenu>
    </header>
    <div class="month">
      <div class="month-item"
           ref='spanItem'>
        <span v-for="(month,index) in months"
              :key='index'
              @click="goMonths(index)">{{month}}月</span>
      </div>
    </div>
    <div class="swiper-container swiper2">
      <div class="swiper-wrapper swiper2-Item"
           ref='divList '>
        <div class="swiper-slide swiper2-List"
             v-for="(magazine,index) in magazines"
             :key="index">
          <img :src="magazine.coverImg"
               alt=""
               @click="goTo(magazine)">
          <p>{{magazine.title}}</p>
          <span>{{magazine.magazineId}}</span>
          <span>总期{{magazine.magazineNo}}</span>
        </div>
      </div>
    </div>
    <!-- 底部进入目录 -->
    <div class="bottom">
      <div class="bottom-item">
        <p>进入目录</p>
      </div>
    </div>
  </div>
</template>
<script>
import datajs from '../../../mock/magazine/data.json'
import Swiper from 'swiper'
import { DropdownMenu, DropdownItem } from 'vant'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'Magazine',
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
        { text: '2014', value: 5 }
      ],
      magazines: [], // 保存辣度数据
      months: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], // 保存月数数据
      index: 0,
      lefts: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initSwiper()
      this.MonthScroll = new BScroll('.month', {
        scrollX: true,
        click: true
      })
      this.magazines = datajs.data
      const span = this.$refs.spanItem.children
      span[0].classList.add('active')
    })
  },
  methods: {
    _initSwiper () {
      this.magazineSwiper = new Swiper('.swiper2', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: false,
        observer: true,
        observeParents: true,
        on: {
          slideChange: () => {
            this.magazineSwiper.activeIndex
            this.index = this.magazineSwiper.activeIndex
            const span = this.$refs.spanItem.children
            Array.prototype.slice.call(span).forEach((span, index) => {
              if (this.index === index) {
                span.classList.add('active')
                this.MonthScroll.scrollToElement(span, 300, true)
              } else {
                span.classList.remove('active')
              }
            })
          }
        }
      })
    },
    goMonths (index) {
      this.index = index
      const span = this.$refs.spanItem.children
      Array.prototype.slice.call(span).forEach((span, index) => {
        if (this.index === index) {
          span.classList.add('active')
        } else {
          span.classList.remove('active')
        }
      })
      // 点击移动到当前到index
      this.magazineSwiper.slideTo(this.index, 500, false)// 切换到第一个slide，速度为1秒
    },
    goTo (magazine) {
      this.$router.push('/home/MagineList')
      if (this._id) {
        this.$store.commit('addMagazine', magazine)
      }
    }
  },
  computed: {
    ...mapState({
      _id: state => state.user._id
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
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
      width 1100px
      span
        margin-left 50px
        font-size 12px
        color #ccc
      .active
        color #000
  .swiper2
    width 100%
    height 100%
    .swiper2-List
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
  .bottom
    width 100%
    background-color #424242
    position absolute
    top 1150px
    z-index 99
    height 100px
    .bottom-item
      width 100%
      height 100px
      line-height 100px
      text-align center
      p
        color #ffe57f
</style>
