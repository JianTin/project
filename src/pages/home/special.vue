<template>
  <div id="outer">
    <router-view></router-view>
    <div class="special">
      <div class="special-title">
        <span class="iconfont icon-right-copy" @click="$router.back()"></span>
        <h2>专题</h2>
      </div>
      <div class="special-container">
        <div class="special-content">
          <div class="special-silde" v-for="(item,index) in datas" :key="index"
            @click="$router.push(`/home/special/${index}`)">
            <h2>
              <span class="iconfont icon-quotation" style="vertical-align: super;"></span>{{item.officialName}}<span
                class="iconfont icon-dayuhao" style="font-size:30px"></span>
            </h2>
            <p>
              {{item.synopsis}}<span class="iconfont icon-fangkuai" style="vertical-align: sub;"></span>
            </p>
            <div class="special-silde-img">
              <img :src="item.image" alt="img">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { reqSpecial } from '../../api'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      datas: []
    }
  },
  async mounted () {
    // 这里需要更改-->点击专题按钮的时候就应该发送请求获取数据
    const result = await reqSpecial()
    // 请求成功将数据保存在状态数据中
    if (result.data.code === 200) {
      this.datas = result.data.data
    }
    // 滚动
    this.scroll1 = new BScroll('.special-container', {
      scrollY: true,
      click: true
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#outer
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  z-index 50
  .special
    width 100%
    height 100%
    padding-top 100px
    .special-title
      width 100%
      height 100px
      display flex
      align-items center
      border-bottom 1px solid #F2F2F2
      position absolute
      top 0
      z-index 2
      background-color #fff
      span
        font-size 30px
        margin-left 20px
      h2
        font-size 30px
        font-weight 500
        margin-left 30px
    .special-container
      width 100%
      height 100%
      background-color #F2F2F2
      // padding 80px 0 0 20px
      .special-content
        width 100%
        // margin-top 400px
        position absolute
        top 317px
        left 26px
        .special-silde
          width 100%
          padding-left 20px
          background-color #fff
          margin-top 80px
          h2
            font-size 30px
            font-weight 600
          p
            font-size 14px
            font-weight 100
            color #202020
            margin-left 30px
            margin-bottom 20px
          .special-silde-img
            width 100%
            height 100%
            &::after
              content ''
              display block
              clear both
              height 0
            img
              width 500px
              height 300px
              float right
</style>
