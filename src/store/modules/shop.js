import {RECEIVE_GOODS, ADD_GOOD_COUNT, REDUCE_CARGOODS} from '../mutations-type'
// 引入Vue
import Vue from 'vue'
import data1 from '../../pages/cultural/data/shop/data.json'
import data2 from '../../pages/cultural/data/series/data.json'
const state = {
  // 商品信息
  moduleList: [], // 商品的信息
  banner: [], // 大图商品的信息,
  cartgoods: [], // 购物车商品数组
  series: [] // 系列商品
}
const mutations = {
  // 更新商品信息
  [RECEIVE_GOODS] (state, { moduleList, banner, series }) {
    state.moduleList = moduleList
    state.banner = banner
    state.series = series
  },
  // 增加购物车的商品
  [ADD_GOOD_COUNT] (state, {good, count}) {
    if (!good.count) {
      Vue.set(good, 'count', count)
      // 立刻把食物对象添加到数组中
      state.cartgoods.push(good)
    } else {
      good.count = count
    }
  },
  // 减少购物车的商品
  [REDUCE_CARGOODS] (state, { cartgoods }) {
    // 从商品的数组中删除当前添加的食物
    state.cartgoods = cartgoods
  }
}
const actions = {
  // 获取商品信息
  getGoods ({ commit }) {
    const moduleList = data1.data.moduleList
    const banner = data1.data.bannerList[0]
    const series = data2.data
    commit(RECEIVE_GOODS, { moduleList, banner, series })
  },
  // 增加或者减少商品的数量
  updateGoodCount ({ commit }, { good, count }) {
    // 更新操作
    commit(ADD_GOOD_COUNT, {good, count})
  },
  // 减少商品数量
  reduceCargoods ({commit}, {cartgoods}) {
    commit(REDUCE_CARGOODS, {cartgoods})
  }
}
const getters = {
  // 总数量
  totalCount (state) {
    return state.cartgoods.length
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
