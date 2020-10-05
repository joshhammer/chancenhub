<template>
  <header class="header">
    <Logo />
    <Navigation />
    <Call>
      <template>
        <Phone />
      </template>
    </Call>
  </header>
</template>

<script>
import Logo from '../partials/Logo'
import Navigation from '../partials/Navigation'
import Call from '../partials/Call'

import Phone from '~/assets/images/icon-call.svg?inline'

export default {
  name: 'Header',
  components: { Logo, Navigation, Call, Phone }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    border: 1px solid red;
  }
</style>
