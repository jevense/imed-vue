import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerShow: false
  },
  mutations: {
    changeDrawer (state, after) {
      state.drawerShow = after
    }
  }
})
