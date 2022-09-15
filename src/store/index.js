import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchList: '',
    detail: '',
    screenWidth: document.documentElement.clientWidth, //屏幕宽度
  },
  getters: {
    getSearchList(state) {
      return state.searchList
    },
    getDetail(state) {
      return state.detail
    }
  },
  mutations: {
    renewSearchList(state,payload) {
      state.searchList = payload.searchList
    },
    renewDetail(state,payload) {
      state.detail = payload.detail
    }
  },
  actions: {
  },
  modules: {
  }
})
