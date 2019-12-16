<template>
  <section class="shopCar">
    <div class="header">
      <span @click="$router.back()"
            class="icon iconfont icon-right-copy"></span>
      <span class="detailTitle">购物车</span>
      <span class="manage"
            @click="isManage = !isManage">{{isManage?'管理':"完成"}}</span>
    </div>
    <div class="shopList-wrapper">
      <CheckboxGroup v-model="result"
                     ref="checkboxGroup">
        <ul class="shopList">
          <li class="shopItem"
              v-for="(item,index) in cartgoods"
              :key="index">
            <Checkbox class="checkItem"
                      :name="item.numberId"></Checkbox>
            <img :src="item.imageUrl"
                 alt="">
            <div class="shopMessage">
              <p class="messageBig">{{item.cName}}</p>
              <p class="messageSmall">主图款</p>
              <div class="price-count">
                <span>￥{{item.shoppPrice}}</span>
                <Stepper button-size="24px"
                         v-model="item.count"
                         @change="onChange(item)" />
              </div>
            </div>
          </li>
        </ul>
      </CheckboxGroup>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <Checkbox class="checkAll"
                v-model="checkedAll"
                @click="toggleAllSelect">全选</Checkbox>
      <div class="total">
        <div v-show="isManage">合计：<span>￥{{totalPrice}}</span></div>
      </div>
      <p class="pay"
         @click="deleteCargoods(isManage)">{{isManage?'确认支付':'删除所选'}}</p>
    </div>
  </section>
</template>
<script>
// 引入了复选框和计数器
import { Checkbox, CheckboxGroup, Stepper } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'shopCar',
  data () {
    return {
      isManage: true, // 显示管理还是完成
      result: [], // 商品选择的数组
      shopCount: 0 // 某个商品要买的数量
    }
  },
  components: { Checkbox, CheckboxGroup, Stepper },
  watch: {},
  computed: {
    ...mapState({
      cartgoods: state => state.shop.cartgoods
    }),
    // 点击复选框
    checkedAll: {
      get () {
        if (this.cartgoods.length && this.result.length === this.cartgoods.length) {
          return true
        }
      },
      set () {
        this.$refs.checkboxGroup.toggleAll()
      }
    },
    // 总共价格
    totalPrice () {
      const currentGoods = this.cartgoods.filter((cartgood, index) => {
        return this.result.find((result) => result === cartgood.numberId)
      })
      const price = currentGoods.reduce((pre, good) => pre + good.count * good.shoppPrice, 0)
      return price
    }

  },
  mounted () {
  },
  methods: {
    // 点击全选按钮
    toggleAllSelect () {
      this.checkedAll = !this.checkedAll
    },
    // 当商品数量发生改变时
    onChange (good) {
      const count = good.count
      this.$store.dispatch('updateGoodCount', { good, count })
    },
    // 点击删除或确认支付按钮时
    deleteCargoods (type) {
      if (type) {
        console.log('立即购买')
      } else {
        const currentGoods = this.cartgoods.filter((cartgood, index) => {
          const result = this.result.find((result) => result === cartgood.numberId)
          if (result) {
            return false
          } else {
            return true
          }
        })
        this.$store.dispatch('reduceCargoods', { cartgoods: currentGoods })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.shopCar
  position absolute
  top 0
  left 0
  height 100%
  width 100%
  background-color #eee
  .header
    width 100%
    height 90px
    background-color #fff
    display flex
    align-items center
    justify-content space-between
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .icon
      margin-left 30px
      font-size 16px
    .detailTitle
      font-weight bold
      font-size 18px
    .manage
      margin-right 30px
  .shopList-wrapper
    width 100%
    height 1065px
    .shopItem
      width 100%
      height 200px
      padding 25px
      background-color #fff
      margin-bottom 20px
      display flex
      align-items center
      .checkItem
        margin 0 20px 0 20px
      img
        width 130px
        height 130px
        border-radius 10px
      .shopMessage
        width 60%
        margin-left 15px
        .messageBig
          font-size 14px
          margin-bottom 5px
          ellipsis-one()
        .messageSmall
          color #999999
          font-size 10px
        .price-count
          margin-top 20px
          font-size 12px
          display flex
          justify-content space-between
.footer
  position absolute
  left 0
  bottom 0
  width 100%
  height 90px
  background #fff
  line-height 90px
  display flex
  font-size 12px
  .checkAll
    width 35%
    padding-left 30px
    span
      color #999
  .total
    width 50%
    padding-left 106px
    div
      span
        color #007fff
        font-size 14px
  .pay
    font-size 14px
    width 30%
    background-color #007fff
    color #fff
    text-align center
</style>
