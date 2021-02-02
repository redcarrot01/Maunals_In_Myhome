import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import LoginCallback from '../components/LoginCallback.vue'
import SearchResult from '../components/SearchResult.vue'
import CustomManual from '../components/CustomManual.vue'
import Card from '../components/Card.vue'
import DetailView from '../components/views/DetailView.vue'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  if (store.getters.isAuth) {
    next()
  } else {
    alert('로그인이 필요한 페이지입니다')
    next(loginPath)
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/login_callback',
      component: LoginCallback
    },
    {
      path: '/manual/:keyword',
      component: SearchResult
    },
    {
      path: '/custom_manual',
      component: CustomManual,
      beforeEnter: requireAuth,
      children: [{path: 'c/:cid', component: Card}]
    },
    {
      path: '/detail/:mcode',
      component: DetailView
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default router
