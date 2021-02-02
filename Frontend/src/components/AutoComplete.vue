<template>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      label="제품 번호를 입력하세요"
      solo-inverted
      @keydown="onKeydown"
      @input="onChange"
    ></v-autocomplete>
</template>

<script>
export default {
  props: ['codes'],
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    querySelections (v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.codes.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
    onKeydown (e) {
      if (e.code !== 'Enter') return
      this.$emit('onKeydown', {search: this.search})
    },
    onChange (e) {
      console.log('changed! ' + e)
      this.$emit('onInputChange', {search: e})
    }
  }
}
</script>

<style scoped>

</style>
