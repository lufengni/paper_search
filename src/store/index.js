import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchList: '',
    detail: '',
    screenWidth: document.documentElement.clientWidth, //屏幕宽度,
    dataCited: [],
    linksCited: [],
    dataAuthor: [],
    linksAuthor: []
  },
  getters: {
    getSearchList(state) {
      return state.searchList
    },
    getDetail(state) {
      return state.detail
    },
    getDataCited(state) {
      return state.dataCited
    },
    getLinksCited(state) {
      return state.linksCited
    },

    getDataAuthor(state) {
      return state.dataAuthor
    },
    getLinksAuthor(state) {
      return state.linksAuthor
    }
  },
  mutations: {
    renewSearchList(state,payload) {
      state.searchList = payload.searchList
    },
    renewDetail(state,payload) {
      state.detail = payload.detail
    },
    setDataCited(state,payload) {
      state.dataCited = payload
    },
    setLinksCited(state,payload) {
      state.linksCited = payload
    },

    setDataAuthor(state,payload) {
      state.dataAuthor = payload
    },
    setLinksAuthor(state,payload) {
      state.linksAuthor = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
