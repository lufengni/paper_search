import request from "./requst"

const api = {}
api.getSearchList = (params = {}) => request.get('/search?key')