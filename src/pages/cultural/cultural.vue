<template>
  <section class="cultural">
    <!-- 头部返回，搜索 -->
    <div class="header">
      <span class="icon iconfont icon-right-copy"
            @click="$router.back()"></span>
      <Search class="search"
              placeholder="搜索"
              v-model="value" />
      <span class="iconfont icon-zazhiqikan"></span>
    </div>
    <!-- shop 系列  tab切换 -->
    <Tabs v-model="active"
          animated
          title-active-color="#007fff"
          title-inactive-color="#999"
          line-height="0px"
          style="margin-top:54px"
          >
      <Tab title="shop">
        <Shop />
      </Tab>
      <Tab title="系列">
        <Series />
      </Tab>
    </Tabs>
  </section>
</template>

<script>
import { Search, Tab, Tabs } from 'vant'
import Shop from './shop'
import Series from './series'
export default {
  name: 'cultural',
  data () {
    return {
      value: '',
      tabs: ['shop', '系列'],
      active: 0
    }
  },
  components: { Search, Tab, Tabs, Shop, Series },
  watch: {},
  computed: {

  },
  mounted () {
    this.$store.dispatch('getGoods')// 获取商品
  },
  methods: {
    // changeTab () {
    //   if (this.active === 1) {
    //     this.active = 0
    //   } else {
    //     this.active = 1
    //   }
    // }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cultural
  width 100%
  position absolute
  left 0
  top 0
  height 100%
  background white
  z-index 120
  .header
    height 54px
    line-height 54px
    margin 20px auto
    position fixed
    top 0
    left 0
    background white
    z-index 100
    display flex
    align-items center
    width 100%
    height 54px
    span
      font-size 20px
      &.icon
        margin-left 20px
    .search
      width 80%
</style>
