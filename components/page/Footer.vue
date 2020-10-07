<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <Social />
      <div class="jvm-text">
        <Contacts />
        <About />
      </div>
    </div>
  </footer>
</template>

<script>
import Social from '../partials/Social'
import Contacts from '../partials/Contacts'
import About from '../partials/About'
export default {
  name: 'Footer',
  components: { Social, Contacts, About }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $white;
  &__wrapper {
    display: flex;
  }
}

.jvm-text {
  display: flex;
}
</style>
