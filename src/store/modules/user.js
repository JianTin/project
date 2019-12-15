import { savephone } from '../mutations-type'
import { getLogin } from '../../api/index'
const state = {
  user: {}
  // id: localStorage.getItem('id_key')
}
const mutations = {
  // 保存用户信息
  [savephone] (state, user) {
    state.user = user
  }
  /* [saveId] (state, user) {
    state.id = user._id
  } */
}
const actions = {
  // 登录
  async gotoLogin ({ commit }, user) {
    const { phone, pwd } = user
    // 发送请求
    const result = await getLogin(phone, pwd)
    if (result.code === 0) {
      const user = result.data
      // this.$store.dispatch('saveuser', user)
      commit(savephone, user)
      // commit(saveId, user)
    }
  }
  /* saveuser ({ commit }, user) {
    // 取出id
    // 保存到vuex中
    commit(saveId, user._id)
    // 保存到localStorage
    localStorage.setItem('id_key', user._id)
    // 保存用户信息
    commit(savephone, user)
  }, */
  // 自动登录
  /*   async AutoLogin ({ commit }, state) {
      if (state.id) {
        const result = await autoLogin(state.id)
        console.log(result)
        if (result.code === 0) {
          commit(savephone, state.user)
        }
      }
    } */
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
