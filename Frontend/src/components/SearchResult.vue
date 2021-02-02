<template>
  <div>
    <v-container fluid >
      <v-layout column>
        <v-flex>
          <v-data-iterator
            :items="Array.from(searchResults)"
            hide-default-footer
          >
            <template v-slot:header>
              <v-toolbar
                class="mb-2"
                color="indigo darken-5"
                dark
                flat
              >
                <v-toolbar-title>"{{keyword}}" 검색결과입니다</v-toolbar-title>
              </v-toolbar>
            </template>

            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="item in props.items"
                  :key="item.product_code"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <v-img :src="item.fields.product_image_link" v-if="(item.fields.product_image_link !== '0')"></v-img>
                    <v-img v-else :src="`https://s3.ap-northeast-2.amazonaws.com/home.manual/assets/default_printer.png`" alt="이미지가 없습니다"></v-img>
                    <v-card-title class="subheading font-weight-bold">
                      {{item.fields.product_code}}
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item
                      >
                        <v-list-item-content>
                          <v-card-actions class="search-content">
                            <v-btn class="mr-auto" color="orange" @click.prevent="linkToDetail(item.fields.product_code)">상세페이지</v-btn>
                            <v-btn class="mr-auto" color="orange" v-if="item.fields.manual_link !== undefined" :href="item.fields.manual_link" target="_blank">사용자매뉴얼</v-btn>
                            <v-btn color="orange" @click.prevent="">+</v-btn>
                          </v-card-actions>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </template>

          </v-data-iterator>
        </v-flex>
      </v-layout>
    </v-container>
<!--    <ManualCard :data="item" v-for="item in searchResults" :key="item.id"></ManualCard>-->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import DataResult from './views/DataResult.vue'
import ManualCard from './ManualCard.vue'

export default {
  data () {
    return {
      limit: 0
    }
  },
  created () {
    this.FETCH_RESULTS({keyword: this.$route.params.keyword})
  },
  computed: {
    ...mapState({
      searchResults: 'searchResults',
      keyword: 'keyword'
    }),
    isSearchResult () {
      return this.searchResults.length
    }
  },
  components: {
    DataResult,
    ManualCard
  },
  methods: {
    linkToDetail (code) {
      this.$router.push(`/detail/${code}`)
    },
    ...mapActions(['FETCH_RESULTS']),
    isManual (link) {
      console.log(link)
      return link.length === 0
    }
  }
}
</script>

<style scoped>

.table h2{
  font-size: 10px;
}

@media screen and (min-width: 768px){
  .search-title{
    font-size: 30px;
  }

  .table h2{
    font-size: 25px;
  }
}
</style>
