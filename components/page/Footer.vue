<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <h1>FOOTER</h1>
      <Social />
    </div>
  </footer>
</template>

<script>
import Social from '../partials/Social'
export default {
  name: 'Footer',
  components: { Social }
}
</script>

<style lang="scss" scoped>
.footer {
  border: 1px solid red;
  // position: relative;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $white;
  &__wrapper {
    border: 3px solid lime;
  }
}
</style>
