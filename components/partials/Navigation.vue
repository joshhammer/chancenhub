<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="" class="navigation__link">#Spielregeln</a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">#Artikel</a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">#Bestpractice</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    list-style-type: none;
  }
  &__item:not(:last-child) {
    margin-right: 2rem;
  }
  &__link {
    color: $black;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
  }
}
</style>
