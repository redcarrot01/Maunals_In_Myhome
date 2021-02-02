import axios from 'axios'
import router from '../router'

// const DOMAIN = 'http://localhost:80'
const DOMAIN = 'https://7vmq93x521.execute-api.ap-northeast-2.amazonaws.com/api'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNAUTHORIZED) onUnauthorized()
      throw result.response
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const manual = {
  // fetch(keyword) {
  //   return keyword ? request('get', `/manual?category=${keyword}`) : request('get', '/manual')
  // },
  fetch (keyword) {
    return keyword ? request('get', `/search?q=${keyword}`) : request('get', '/search')
  }
}

export const main = {
  fetch () {
    return request('get', '/codes')
  }
}

export const custom = {
  create (userId) {
    return request('post', '/custom', {userId})
  },
  fetch (userId) {
    return request('get', `/custom?user_id=${userId}`)
  }
}

export const card = {
  create (title, listId, pos) {
    return request('post', '/cards', {title, listId, pos})
  },
  fetch (id) {
    return axios({method: 'get', url: `http://localhost/cards/${id}`}).then(result => result.data)
  }
}

export const detail = {
  fetch (code) {
    return request('get', `/code?product_code=${code}`).then(result => result.body)
  }
}
