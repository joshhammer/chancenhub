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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    background-color: $white;
    border-bottom: 1px solid rgba($black, 0.2);
    box-shadow: 0 2px 10px rgba($black, 0.25);

    @media (max-width: 767px) {
      flex-direction: column;
      padding: 1rem 1.5rem;
    }
  }
</style>
