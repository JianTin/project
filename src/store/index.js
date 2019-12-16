import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import member from './modules/member'
import course from './modules/course'
import reads from './modules/reads'
import user from './modules/user'
import shop from './modules/shop'
Vue.use(Vuex)

// eslint-disable-next-line new-cap
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    member,
    course,
    reads,
    user,
    shop
  }
})
