import { savephone, addCourse, addMagazine } from '../mutations-type'
import { getLogin } from '../../api/index'
const state = {
  user: {},
  _id: '',
  collectionMagazine: [],
  collectionCourse: []
}
const mutations = {
  // 保存用户信息
  [savephone] (state, user) {
    state.user = user
    state._id = user._id
    localStorage.setItem('_id', user._id)
  },
  // 添加 课程数据
  [addCourse] (state, course) {
    console.log(course)
    state.collectionCourse.unshift(course)
  },
  // 添加 杂志数据
  [addMagazine] (state, sync) {
    console.log(sync)
    state.collectionMagazine.unshift(sync)
  }
}
const actions = {
  // 登录
  async gotoLogin ({ commit }, user) {
    const { phone, pwd } = user
    // 发送请求
    const result = await getLogin(phone, pwd)
    if (result.code === 0) {
      const user = result.data
      commit(savephone, user)
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
