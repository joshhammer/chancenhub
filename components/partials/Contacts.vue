<template>
  <div class="contacts">
    <span>Jung von Matt/Limmat</span>
    <span>Wolfbachstrasse 19</span>
    <span>8032 Zürich</span>
    <span>+41 44 254 66 00</span>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss" scoped>
.contacts {
  margin: 0 1rem 0.5rem 0;
  & span {
    position: relative;
    &:not(:first-child)::before {
      content: " / ";
    }
  }
}
</style>
