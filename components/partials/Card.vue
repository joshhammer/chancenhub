<template>
  <a href="https://chancen.jvm.ch/die-bargeldlose-gewohnheit" class="card card__animated">
    <div class="card__inner">
      <p>{{ type === 'rule' ? '#Spielregeln' : null }}</p>
      <h1>{{ title }}</h1>
    </div>
    <div class="card__overlay">
      <h2 v-if="type === 'rule'">#{{ cardId }}</h2>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: null
    },
    creationDate: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    cardId: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
}

.card {
  position: relative;
  padding: 20px;
  background: $gray;
  min-width: 200px;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;
    & h2 {
      font-size: 10rem;
      color: $white;
    }
  }
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   height: 100%;
    //   width: 100%;
    //   background-color: rgba($black, 0.2);
    // }
  }
  & h1 {
    color: $white;
    font-size: 2.5rem;
    text-transform: uppercase;
    @media (max-width: 2199px) {
      font-size: 2.15rem;
    }
    @media (max-width: 1199px) {
      font-size: 2.75rem;
    }
    @media (max-width: 999px) {
      font-size: 2.1rem;
    }
  }
  & p {
    color: $white;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  &__animated {
    display: inline-block;
    // box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow transform;
  }
  &__animated:hover, &__animated:focus, &__animated:active {
    background-color: $mintgreen;
    box-shadow: 0 4px 15px rgba($black, 0.5);
  }
}
</style>
