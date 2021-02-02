import * as api from '../api'

const actions = {
  FETCH_RESULTS ({commit}, {keyword}) {
    // commit('SET_RESULTS', {keyword})
    api.manual.fetch(keyword).then(data => {
      commit('SET_RESULTS', {results: data.hits.hit, keyword: keyword})
    })
  },
  FETCH_CODES ({commit}) {
    api.main.fetch().then(data => {
      console.log(data)
      commit('SET_CODES', {codes: data.product_code})
    })
  },
  CUSTOM_CREATE ({commit}, {userId}) {
    api.custom.create(userId).then(data => {
      console.log(data)
    })
  },
  FETCH_CUSTOM ({commit}, {userId}) {
    api.custom.fetch(userId).then(data => {
      commit('SET_CUSTOM', {custom: data.body[0]})
    })
  },
  FETCH_CARD ({commit}, {id}) {
    return api.card.fetch(id).then(data => {
      console.log(data)
      commit('SET_CARD', data.item)
    })
  },
  FETCH_DETAIL ({commit}, {code}) {
    return api.detail.fetch(code).then(data => {
      commit('SET_DETAIL', data[0])
    })
  }
}

export default actions
