import {getReads} from '../../api'
import {changReads} from '../mutations-type'
const state = {
  // 读物的轮播图
  bannerList: [],
  // 最新期刊
  newModule: {},
  hotModule: {}
}
const mutations = {
  [changReads] (state, data) {
    const {bannerList, moduleList} = data
    state.bannerList = bannerList
    state.newModule = moduleList[0]
    state.hotModule = moduleList[1]
  }
}
const actions = {
  async actionGetReads ({commit}) {
    const result = await getReads()
    if (result.code === 0) {
      commit(changReads, result.data.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
