import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerShow: false,
    apiUrl: 'http://192.168.8.144:8080'
  },
  mutations: {
    changeDrawer (state, after) {
      state.drawerShow = after
    }
  }
})
