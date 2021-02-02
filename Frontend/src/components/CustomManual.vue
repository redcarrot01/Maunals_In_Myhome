<template>
  <div>
    <div class="base-wrapper">
      <div class="custom-wrapper">
        <div class="custom">
          <div class="custom-header">
            <span class="custom-title">{{ email }}</span>
          </div>
          <div class="list-section-wrapper">
            <div class="list-section">
              <div class="list-wrapper" v-for="list in custom.group_lists" :key="list.id">
                <List :data="list"></List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import List from './List.vue'
import dragula from 'dragula'
import 'dragula/dist/dragula.css'

export default {
  components: {
    List
  },
  data () {
    return {
      dragularCards: null
    }
  },
  computed: {
    ...mapState({
      custom: 'custom',
      email: 'email'
    })
  },
  created () {
    this.FETCH_CUSTOM({userId: this.email})
  },
  updated () {
    if (this.dragularCards) this.dragularCards.destroy()
    this.dragularCards = dragula([
      ...Array.from(this.$el.querySelectorAll('.card-list'))
    ]).on('drop', (el, wrapper, target, siblings) => {
      console.log('drop')
    })
  },
  methods: {
    ...mapActions([
      'FETCH_CUSTOM'
    ])
  }
}
</script>

<style>
.base-wrapper{
  flex-grow: 1;
  height: 100%;
  position: relative;
}
.custom-wrapper{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.custom{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.custom-header{
  flex: none;
  padding: 8px 4px 8px 8px;
  margin: 0;
}
.list-section-wrapper{
  flex-grow: 1;
  position: relative;
}
.list-section{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
}
.list-wrapper{
  display: inline-block;
  height: 100%;
  width: 272px;
  vertical-align: top;
  margin-right: 5px;
}
</style>
