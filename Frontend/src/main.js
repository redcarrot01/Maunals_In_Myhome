import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify.js'

import { domain, clientId } from '../auth_config.json'
import { Auth0Plugin } from './auth'

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
