<template>
  <div class="content">
    <div class="content__grid">
      <Card
        v-for="card in sortedAndFilteredCards"
        :key="card.id"
        :card-id="card.id"
        :rule-number="card.number"
        :title="card.title"
        :link="card.link"
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
      default: ''
    }
  },
  data () {
    return {
      cards: data
    }
  },
  computed: {
    cardsWithDate () {
      const cardsWithJoinedDate = this.cards.map((card) => {
        const tempArray = String(card.creationDate).split('/').reverse()
        const joinedDate = tempArray.join('')
        card.creationDate = Number(joinedDate)
        return card
      })
      return cardsWithJoinedDate
    },
    sortedAndFilteredCards () {
      const cardsCopy = this.cardsWithDate
      const sortedCards = cardsCopy.sort((a, b) => {
        return a.creationDate > b.creationDate ? -1 : 1
      })
      if (this.filterValue === 'all') {
        return sortedCards
      }
      const filteredCards = sortedCards.filter(card => card.type === this.filterValue)
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
  @media (max-width: 1299px) {
    padding-top: 254px;
  }
  @media (max-width: 1024px) {
    padding-top: 212px;
    padding-bottom: 175px;
  }
  @media (max-width: 768px) {
    padding-top: 174px;
    padding-bottom: 0;
  }
  &__grid {
    width: 100%;
    padding: 3rem;
    display: grid;
    grid-gap: 25px;
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
      padding-top: 2rem;
      grid-template-columns: 1fr;
    }
  }
}
</style>
