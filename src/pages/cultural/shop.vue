<template>
  <section class="shopWrapper">
    <div class="shop">
      <!-- shop大图 -->
      <div class="bigImg"
           @click="$router.push({ path: '/home/detail', query: { detail } })">
        <img :src="banner.imageUrl"
             alt="">
      </div>
      <!-- 限时特惠等等list -->
      <ul class="modules">
        <li class="moduleItem"
            v-for="(module,index) in moduleList"
            :key="index">
          <div class="top">
            <p class="moduleName">{{module.moduleName}}</p>
            <div v-show="module.property===2"
                 class="moreIcon">
              <span class="more">更多</span>
              <span class="icon">&gt;</span>
            </div>
          </div>
          <ul class="recommendList">
            <li v-for="(item,index) in module.commodityRecommendList"
                :key="index"
                @click="$router.push({ path: '/home/detail', query: { detail:JSON.stringify(item) } })">
              <img :src="item.imageUrl"
                   alt="">
              <p>{{item.cName}}</p>
              <div>
                <span class="price">￥{{item.shoppPrice}}</span>
                <span class="memberPrice">会员 ￥{{item.memberPrice}}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="shoppingCar"
         @click="$router.push('/home/shopCar')">
      <span class="iconfont icon-gouwuchekong"></span>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'shop',
  data () {
    return {
      detail: ''// 点击商品进入商品详情页面的数据
    }
  },
  components: {},
  watch: {},
  computed: {
    ...mapState({
      moduleList: state => state.shop.moduleList,
      banner: state => state.shop.banner
    })
  },
  mounted () {
    this.detail = JSON.stringify(this.banner)
    if (!this.shopScroll) {
      this.shopScroll = new BScroll('.shopWrapper', {
        click: true
      })
    } else {
      this.shopScroll.refresh()
    }
  },
  methods: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.shopWrapper
  width 100%
  height 1089px
  position relative
  .shop
    width 100%
    .bigImg
      width 100%
      img
        width 100%
        height 350px
    .modules
      width 100%
      .moduleItem
        width 100%
        padding 35px 0 35px 35px
        border-bottom 10px solid #eee
        .top
          display flex
          justify-content space-between
          .moduleName
            font-weight 600
            font-size 20px
            letter-spacing 4px
            margin-bottom 20px
          .moreIcon
            margin-right 40px
            color #999
            .more
              font-size 12px
              margin-right 5px
            .icon
              font-size 16px
              font-weight blod
        .recommendList
          width 100%
          display flex
          flex-wrap wrap
          li
            width 192px
            height 314px
            display flex
            flex-direction column
            margin-right 27px
            overflow hidden
            img
              width 100%
              border-radius 10px
              height 168px
            p
              margin 10px 10px 5px 10px
              ellipsis(2)
              font-size 12px
            div
              .price
                color #007fff
                font-size 12px
                margin-right 10px
              .memberPrice
                background-image linear-gradient(to right, silver, #2f4f4f)
                color #fff
                font-size 8px
                border-radius 5px
  .shoppingCar
    width 100px
    height 100px
    border-radius 50%
    text-align center
    line-height 100px
    position fixed
    bottom 100px
    right 30px
    background-color #ffffff
    z-index 30
    box-shadow 5px 5px 5px #888888
    span
      font-size 25px
</style>
