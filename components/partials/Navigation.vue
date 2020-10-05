<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="" class="navigation__link" :class="{active:active === 'rule'}" @click.prevent="active = 'rule'">#Spielregeln</a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link" :class="{active:active === 'article'}" @click.prevent="active = 'article'">#Artikel</a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link" :class="{active:active === 'link'}" @click.prevent="active = 'link'">#Bestpractice</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      active: 'rule'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.navigation {
  @media (max-width: 767px) {
        order: 2;
      }
  &__list {
    display: flex;
    list-style-type: none;
  }
  &__item:not(:last-child) {
    margin-right: 2rem;
    @media (max-width: 767px) {
        margin-right: 1rem;
      }
  }
  &__link {
    color: $black;
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: 300;
    padding: 0 5px;
    background-image: linear-gradient(to right, $mintgreen, $mintgreen);
    background-size: 100% 30%;
    background-position: bottom;
    background-repeat: repeat-x;
    transition: all .15s ease-in-out;
    @media (max-width: 767px) {
        font-size: 1.1rem;
        padding: 0;
      }
    &:hover {
      background-size: 100% 100%;
      color: $white;
    }
  }
}

.active {
  background-size: 100% 100%;
  color: $white;
}
</style>
