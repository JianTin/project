import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import member from './modules/member'
Vue.use(Vuex)

// eslint-disable-next-line new-cap
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    member
  }
})
