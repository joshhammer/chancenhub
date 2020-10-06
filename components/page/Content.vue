<template>
  <div class="content">
    <div class="content__grid">
      <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :creation-date="card.creationDate"
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
  data () {
    return {
      cards: data
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  &__grid {
    width: 100%;
    padding: 3rem;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 300px;
  }
}
// .card {
//   padding: 20px;
//   background: lightgray;
//   &__animated {
//     display: inline-block;
//     vertical-align: middle;
//     transform: perspective(1px) translateZ(0);
//     box-shadow: 0 0 1px rgba(0, 0, 0, 0);
//     overflow: hidden;
//     transition-duration: 0.5s;
//     transition-property: color, background-color, box-shadow;
//   }
//   &__animated:hover, &__animated:focus, &__animated:active {
//     background-color: #2098D1;
//     color: white;
//     box-shadow: 0 2px 10px rgba($black, 0.7);
//   }
// }
</style>
