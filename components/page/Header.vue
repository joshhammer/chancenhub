<template>
  <header class="header">
    <Logo />
    <Navigation @send-filter-value="setFilterValue" />
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
  components: { Logo, Navigation, Call, Phone },
  data () {
    return {
      filterValue: ''
    }
  },
  watch: {
    filterValue (newVal, oldVal) {
      this.$emit('send-filter-value', newVal)
    }
  },
  methods: {
    setFilterValue (value) {
      this.filterValue = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    background-color: rgba($white, 0.95);
    border-bottom: 1px solid rgba($black, 0.1);
    box-shadow: 0 2px 10px rgba($black, 0.15);
    @media (max-width: 1399px) {
          flex-wrap: wrap;
        }
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem 1.5rem;
    }
  }
</style>
