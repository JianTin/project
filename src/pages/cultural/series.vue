<template>
  <section class="series">
    <!-- 左边导航条 -->
    <Sidebar v-model="activeKey"
             @change="changeBar(activeKey)">
      <SidebarItem :title="item.type"
                   v-for="(item,index) in series"
                   :key="index" />
    </Sidebar>
    <!-- 右边内容 -->
    <div class="serie">
      <p class="title">{{serieData.type}}</p>
      <div class="serie-wrapper">
        <ul class="serieList">
          <li class="serieItem"
              v-for="(item,index) in serieData.list"
              :key="index"
              @click="gotoDetail(item,index)">
            <img :src="item.imageUrl"
                 alt="">
            <div class="message">
              <p>{{item.cName}}</p>
              <div>
                <span class="price">￥{{item.shoppPrice}}</span>
                <span class="memberPrice">会员￥{{item.memberPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { Sidebar, SidebarItem } from 'vant'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'series',
  data () {
    return {
      activeKey: 0, // 切换导航时的索引值
      serieData: {}// 左边切换时右边使用的数据
    }
  },
  components: {
    Sidebar,
    SidebarItem
  },
  watch: {},
  computed: {
    ...mapState({
      series: state => state.shop.series
    })
  },
  mounted () {
    this.serieData = this.series[0]
    // 右边滚动条
    this.seriesScroll = new BScroll('.serie-wrapper', {
      click: true
    })
  },
  methods: {
    changeBar (index) {
      this.serieData = this.series[index]
    },
    // 跳转到商品详情
    gotoDetail (detail, index) {
      detail = JSON.stringify(detail)
      this.$router.push({ path: '/home/detail', query: { detail, index } })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.series
  width 100%
  display flex
  .van-sidebar
    width 85px
    .van-sidebar-item
      // border none
      padding 20px 12px 14px 8px
      color #bbb
    .van-sidebar-item--select
      padding-left 8px
      border-color #007fff
      color #000
      // .van-sidebar-item__text
      // border-left 3px solid #007fff
      // padding-left 5px
      // background-color #007fff
  .serie
    width 572px
    padding 20px
    .title
      color #aaa
      font-size 14px
      padding-bottom 30px
    .serie-wrapper
      height 983px
      overflow hidden
      .serieList
        .serieItem
          margin-bottom 40px
          display flex
          img
            width 200px
            height 200px
            border-radius 5px
            margin-right 15px
          .message
            width 100%
            p
              width 100%
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              font-size 15px
              font-weight 700
            div
              margin-top 70px
              .price
                color #007fff
                font-size 12px
                margin-right 10px
              .memberPrice
                background-image linear-gradient(to right, silver, #2f4f4f)
                color #fff
                font-size 8px
                border-radius 5px
</style>
