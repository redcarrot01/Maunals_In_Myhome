<template>
  <div data-app>
    <div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="item">
            <h1 class="user-email" v-if="$auth.isAuthenticated">{{ $auth.user.email }} 님 안녕하세요</h1>
            <p class="main-desc">
              융복합 프로젝트
              우리집 사용설명서 <br/><strong>한국형 통합 사용설명서</strong> 검색서비스입니다.<br/>
              로그인하시면 내가 원하는 설명서들을 한곳에 모을 수 있는
              <strong>개인모음집</strong> 서비스를 사용할 수 있습니다.
            </p>
            <AutoComplete @onKeydown="search" :codes="codes" @submit="search" @onInputChange="search"></AutoComplete>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState, mapMutations} from 'vuex'
import AutoComplete from './AutoComplete.vue'

export default {
  data () {
    return {
      msg: 'Home',
      keyword: ''
    }
  },
  created () {
    this.FETCH_CODES()
    if (this.$auth.isAuthenticated) {
      console.log('LOGIN 호출')
      const token = this.$auth.getTokenSilently()
      this.LOGIN({email: this.$auth.user.email, token: token})
      this.CUSTOM_CREATE({userId: this.$auth.user.email})
    }
  },
  components: {
    AutoComplete
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ]),
    ...mapState([
      'codes', 'email'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_RESULTS',
      'FETCH_CODES',
      'CUSTOM_CREATE'
    ]),
    ...mapMutations([
      'LOGIN'
    ]),
    search ({search}) {
      this.keyword = search
      if (!this.keyword.length) return
      this.$router.push(`/manual/${this.keyword}`)
    }
  }
}
</script>

<style>
.container{
  height: 100%;
  display: flex;
  vertical-align: middle;
  text-align: center;
  /*position: relative;*/
}
.content-wrapper{
  /*position: absolute;*/
  margin: auto;
}

.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
}

.user-email {
  font-size: 20px;
  text-align: center;
}

.main-desc{
  font-family: omni_020;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .user-email {
    font-size: 30px;
  }
  .main-desc {
    text-align: center;
  }
}
</style>
