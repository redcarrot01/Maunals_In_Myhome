<template>
  <div class="list">
    <div class="list-header">
      <div class="list-header-title">{{ data.title }}</div>
    </div>
    <div class="card-list" :data-list-id="data.id">
      <CardItem v-for="card in data.cards" :key="`${card.id}`" :data="card"/>
    </div>
    <div v-if="isAddCard">
      <AddCard @close="isAddCard=false"></AddCard>
    </div>
    <div v-else>
      <a class="add-card-btn" href="" @click.prevent.stop="isAddCard=true">
        &plus; Add a card..
      </a>
    </div>

  </div>
</template>

<script>
import AddCard from './AddCard'
import CardItem from './CardItem'

export default {
  components: {AddCard, CardItem},
  props: ['data'],
  data () {
    return {
      isAddCard: false
    }
  }
}
</script>

<style>
.list {
  background-color: #e2e4e6;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  width: 100%;
  max-height: 100%;
}

.list-header{
  flex: 0 0 auto;
  padding: 10px 8px 8px;
  position: relative;
}

.list-header-title{
  font-family: "omni_020";
}

.add-card-btn {
  flex: 0 0 auto;
  display: block;
  padding: 8px 10px;
  color: #8c8c8c;
  text-decoration: none;
}
.add-card-btn:focus,
.add-card-btn:hover {
  background-color: rgba(0,0,0, .1);
}
</style>
