<template>
    <nav class="navbar navbar-expand-md navbar-light">
      <router-link to="/" class="navbar-brand" href="#">우리집 사용설명서</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/custom_manual" class="nav-link" href="#">개인모음집</router-link>
          </li>
          <li class="nav-item">
            <div v-if="!$auth.loading">
              <!-- show login when not authenticated -->
              <a v-if="!$auth.isAuthenticated" class="nav-link ml-auto mr-3" @click="login">로그인</a>
              <!-- show logout when authenticated -->
              <a v-if="$auth.isAuthenticated" class="nav-link ml-auto mr-3" @click="logout">로그아웃</a>
            </div>
<!--            <div v-if="isAuth">-->
<!--              <a href="#" @click="logout" class="nav-link ml-auto mr-3">로그아웃</a>-->
<!--            </div>-->
<!--            <div v-else>-->
<!--              <router-link to="/login" class="nav-link ml-auto mr-3">로그인</router-link>-->
<!--            </div>-->
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input v-model="keyword" class="form-control mr-sm-2" type="search" placeholder="검색어를 입력해주세요" aria-label="Search">
          <button @click.prevent="search" id="toggle-btn" class="btn my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  data () {
    return {
      text: '안녕하세요',
      keyword: ''
    }
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    ...mapActions([
      'FETCH_RESULTS'
    ]),
    login () {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    },
    // logout () {
    //   this.LOGOUT()
    //   this.$router.push('/login')
    // },
    search () {
      if (!this.keyword.length) return
      this.FETCH_RESULTS({keyword: this.keyword})
      this.$router.push(`/manual/${this.keyword}`)
    }
  }
}
</script>

<style>
.navbar {
  flex: none;
  background-color: #009688;
  font-family: "omni_040";
  font-weight: bold;
}
#app > div > div:nth-child(1) > nav > button{
  border: none;
}
#app > nav > a,
#navbarSupportedContent > ul > li:nth-child(1) > a,
#navbarSupportedContent > ul > li:nth-child(2) > div > a
{
  color : white;
}

#toggle-btn{
  background-color: black;
  color: white;
  font-weight: 700;
}

#toggle-btn:hover{
  background-color: darkgray;
}

.navbar-brand {
  font-size: 29px;
}

.form-inline input{
  border: solid 1px white;
}

.form-inline button{
  border: none;
}

@media screen and (min-width: 768px) {
  .navbar-brand {
    font-size: 20px;
  }
}

</style>
