<template>
  <div class="card card__animated">
    <div class="card__inner">
      <p>{{ type === 'rule' ? '#Spielregeln' : null }}</p>
      <h1>{{ title }}</h1>
    </div>
  </div>
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
.card {
  border-radius: 5px;
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
    font-size: 2.25rem;
    text-transform: uppercase;
    @media (max-width: 1199px) {
      font-size: 2.75rem;
    }
    @media (max-width: 999px) {
      font-size: 2rem;
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
    // vertical-align: middle;
    // transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    // overflow: hidden;
    transition-duration: 0.35s;
    transition-property: background-color, box-shadow transform;
  }
  &__animated:hover, &__animated:focus, &__animated:active {
    background-color: $mintgreen;
    // color: $white;
    transform: scale(1.005);
    box-shadow: 0 2px 10px rgba($black, 0.7);
  }
}
</style>
