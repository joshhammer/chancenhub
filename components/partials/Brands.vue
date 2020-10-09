<template>
  <div>
    <ul class="jvm-brands">
      <li><a href="http://jvmbrandidentity.ch/">Brand Identity</a></li>
      <li><a href="http://jvmimpact.ch/">Impact</a></li>
      <li><a href="http://www.jvm-play.ch/">Play</a></li>
      <li><a href="https://jvmservices.ch/">Services</a></li>
      <li><a href="https://jvmtech.ch/">Tech</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Brands'
}
</script>

<style lang="scss" scoped>
.jvm-brands {
  display: flex;
  & li {
    &:not(:last-child) {
      margin-right: 1rem;
    }
    & a {
      text-transform: uppercase;
      font-weight: 300;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }
}
</style>
