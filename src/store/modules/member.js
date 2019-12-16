import {getMemberRights} from '../../api'
import {changMemberRights} from '../mutations-type'

const state = {
  // 活动
  activities: [],
  // 月卡
  month: [],
  // 年卡
  year: [],
  // 用户信息
  user: [],
  // 卡片
  card: [],
  // 专享打折 听书
  course: []
}
const mutations = {
  changMemberRights (state, data) {
    // eslint-disable-next-line standard/object-curly-even-spacing
    const {activities, month, year, user, card, course } = data
    state.activities = activities
    state.month = month
    state.year = year
    state.user = user
    state.card = card
    state.course = course
  }
}
const actions = {
  // 获取 会员的数据
  async actionGetMemberRights ({commit}) {
    const result = await getMemberRights()
    console.log(result)
    if (result.code === 0) {
      // 返回真正的数据
      console.log(result.data)
      commit(changMemberRights, result.data.data)
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
