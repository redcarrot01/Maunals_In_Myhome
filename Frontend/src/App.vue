<template>
  <div id="app">
    <GlobalNavigation></GlobalNavigation>
    <router-view class="main-container"></router-view>
  </div>
</template>

<script>
import GlobalNavigation from './components/GlobalNavigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {GlobalNavigation, Footer},
  data () {
    return {

    }
  }
}
</script>

<style>

html, body, #app {
  height: 100%;
  margin: 0px;
}

#app {
  display: flex;
  flex-direction: column;
}

.main-container {
  flex-grow: 1;
}

@font-face {
  font-family: "omni_020";
  src:url("assets/font/omni_020.ttf") format("truetype");
}

@font-face {
  font-family: "omni_030";
  src:url("assets/font/omni_030.ttf") format("truetype");
}
.background{
  height: 100vh;
}

body{
  background-color: #D8F2E2;
  position: relative;
  z-index:1;
}

/*.background {*/
/*  position: relative;*/
/*  z-index:1;*/
/*}*/

body:after{
  background-repeat: repeat;
  background-image: url('assets/background_2.jpg');
  background-size: cover;
  display: block;
  top:0;
  left:0;
  position:absolute;
  opacity:0.2!important;
  filter:alpha(opacity=50);
  z-index:-1;
  content:"";
  width:100%;
  height: 100vh;
}
.footer{
  display: none;
}

@media screen and (min-width: 768px) {
  .footer{
    display: block;
  }
}
</style>
