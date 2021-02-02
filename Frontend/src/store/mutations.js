import {setAuthInHeader} from '../api'

const mutations = {
  LOGIN (state, {token, email}) {
    if (!token) return
    state.token = token
    state.email = email
    setAuthInHeader(token)
  },
  LOGOUT (state) {
    state.token = null
    state.email = ''
    delete localStorage[`com.naver.nid.access_token`]
    delete localStorage[`com.naver.nid.oauth.state_token`]
    setAuthInHeader(null)
  },
  SET_IS_ADD_CARD (state, toggle) {
    state.isAddCard = toggle
  },
  SET_RESULTS (state, {results, keyword}) {
    state.keyword = keyword
    state.searchResults = results
  },
  SET_CODES (state, {codes}) {
    state.codes = codes
  },
  SET_CUSTOM (state, {custom}) {
    state.custom = custom
  },
  SET_CARD (state, card) {
    state.card = card
  },
  SET_DETAIL (state, manual) {
    state.manual = manual
  }
}

export default mutations
