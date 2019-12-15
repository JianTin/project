import {getCourse} from '../../api'
import {changCourse} from '../mutations-type'
const state = {
  // 第一个 轮播图
  bannerList: [],
  // 最新课程
  newCourse: {},
  // 专题
  special: {},
  // 本周热门
  hotCouse: {}
}
const mutations = {
  [changCourse] (state, data) {
    const {bannerList, moduleList} = data
    state.bannerList = bannerList
    state.newCourse = moduleList[0]
    state.special = moduleList[1]
    state.hotCouse = moduleList[2]
  }
}
const actions = {
  async actionGetCourse ({commit}) {
    const result = await getCourse()
    if (result.code === 0) {
      commit(changCourse, result.data.data)
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
