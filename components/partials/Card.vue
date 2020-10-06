<template>
  <div class="card card__animated">
    <h1>{{ title }}</h1>
    <p>{{ creationDate }}</p>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  background: lightgray;
  &__animated {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    transition-duration: 0.5s;
    transition-property: color, background-color, box-shadow;
  }
  &__animated:hover, &__animated:focus, &__animated:active {
    background-color: #2098D1;
    color: white;
    box-shadow: 0 2px 10px rgba($black, 0.7);
  }
}
</style>
