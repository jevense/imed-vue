import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerShow: false,
    tabId: 'local-sheet',
    apiUrl: 'http://192.168.8.144:8080/imed'
    // apiUrl: 'http://47.94.206.185:2020',
  },
  mutations: {
    changeDrawer (state, after) {
      state.drawerShow = after
    },
    switchContent (state, after) {
      state.tabId = after
    },
  }
})
