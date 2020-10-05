<template>
  <header class="header">
    <Logo />
  </header>
</template>

<script>
import Logo from '../partials/Logo'

export default {
  name: 'Header',
  components: { Logo }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 2rem 1rem;
    border: 1px solid red;
  }
</style>
