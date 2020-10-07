<template>
  <a href="https://chancen.jvm.ch/die-bargeldlose-gewohnheit" class="card card__animated">
    <div>
      <div class="card__inner">
        <p>{{ type === 'rule' ? '#Spielregeln' : null }}</p>
        <h1>{{ title }}</h1>
      </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
}

.card {
  // border-radius: 5px;
  padding: 20px;
  background: $gray;
  min-width: 200px;
  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
