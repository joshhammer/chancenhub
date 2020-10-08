<template>
  <div class="content">
    <div class="content__grid">
      <Card
        v-for="card in sortedCards"
        :key="card.id"
        :card-id="card.id"
        :title="card.title"
        :creation-date="card.creationDate"
        :type="card.type"
        :background-color="card.backgroundColor"
      />
    </div>
  </div>
</template>

<script>
import data from '../../assets/data/data.js'
import Card from '../partials/Card'

export default {
  name: 'Content',
  components: { Card },
  props: {
    filterValue: {
      type: String,
      default: 'rule'
    }
  },
  data () {
    return {
      cards: data
    }
  },
  computed: {
    sortedCards () {
      const cards = data.sort((a, b) => {
        return a.id > b.id ? -1 : 1
      })
      const filteredCards = cards.filter(card => card.type === this.filterValue)
      return filteredCards
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  padding-bottom: 150px;
  @media (max-width: 1024px) {
    padding-bottom: 0;
  }
  &__grid {
    width: 100%;
    padding: 3rem;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, auto);
    grid-auto-rows: 300px;
    @media (max-width: 1799px) {
      grid-template-columns: repeat(4, auto);
    }
    @media (max-width: 1599px) {
      grid-template-columns: repeat(3, auto);
    }
    @media (max-width: 1199px) {
      grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
