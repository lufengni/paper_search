import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchList: '',
    detail: '',
    screenWidth: document.documentElement.clientWidth, //屏幕宽度,
    dataCited: {
      "success": true,
      "code": 200,
      "message": "操作成功",
      "queryData": [
        {
          "id": 44,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 45,
            "paperId": null,
            "publishedYear": null,
            "title": "6"
          }
        },
        {
          "id": 42,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 3,
            "paperId": null,
            "publishedYear": null,
            "title": "3"
          }
        },
        {
          "id": 43,
          "startNode": {
            "id": 43,
            "paperId": "2",
            "publishedYear": "1999",
            "title": "test2"
          },
          "endNode": {
            "id": 44,
            "paperId": null,
            "publishedYear": null,
            "title": "5"
          }
        }
      ]
    },
    dataAuthor: {
      "success": true,
      "code": 200,
      "message": "操作成功",
      "queryData": [
        {
          "id": 56,
          "startNode": {
            "id": 7,
            "name": "author2"
          },
          "endNode": {
            "id": 8,
            "name": "author4"
          }
        },
        {
          "id": 55,
          "startNode": {
            "id": 6,
            "name": "author1"
          },
          "endNode": {
            "id": 8,
            "name": "author4"
          }
        },
        {
          "id": 54,
          "startNode": {
            "id": 6,
            "name": "author1"
          },
          "endNode": {
            "id": 7,
            "name": "author2"
          }
        },
        {
          "id": 8,
          "startNode": {
            "id": 6,
            "name": "author1"
          },
          "endNode": {
            "id": 50,
            "name": "author5"
          }
        },
        {
          "id": 58,
          "startNode": {
            "id": 46,
            "name": "author3"
          },
          "endNode": {
            "id": 6,
            "name": "author1"
          }
        },
        {
          "id": 57,
          "startNode": {
            "id": 7,
            "name": "author2"
          },
          "endNode": {
            "id": 46,
            "name": "author3"
          }
        },
        {
          "id": 59,
          "startNode": {
            "id": 46,
            "name": "author3"
          },
          "endNode": {
            "id": 50,
            "name": "author5"
          }
        }
      ]
    }
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
    renewSearchList(state, payload) {
      state.searchList = payload.searchList
    },
    renewDetail(state, payload) {
      state.detail = payload.detail
    }
  },
  actions: {
  },
  modules: {
  }
})
