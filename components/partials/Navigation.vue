<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a
          href=""
          class="navigation__link navigation__link__rule"
          :class="{active:filterValue === 'rule'}"
          @click.prevent="filterValue = 'rule'"
          @click="sendFilterValue"
        >#Spielregeln</a>
      </li>
      <li class="navigation__item">
        <a
          href=""
          class="navigation__link navigation__link__article"
          :class="{active:filterValue === 'article'}"
          @click.prevent="filterValue = 'article'"
          @click="sendFilterValue"
        >#Artikel</a>
      </li>
      <li class="navigation__item">
        <a
          href=""
          class="navigation__link navigation__link__link"
          :class="{active:filterValue === 'link'}"
          @click.prevent="filterValue = 'link'"
          @click="sendFilterValue"
        >#Bestpractice</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      filterValue: 'all'
    }
  },
  methods: {
    sendFilterValue () {
      this.$emit('send-filter-value', this.filterValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  @media (max-width: 1299px) {
        order: 3;
        margin: 0 auto;
        margin-top: 2rem;
      }
  @media (max-width: 768px) {
        order: 2;
        margin-top: 0;
      }
  &__list {
    display: flex;
    list-style-type: none;
  }
  &__item:not(:last-child) {
    margin-right: 2rem;
    @media (max-width: 768px) {
        margin-right: 1rem;
      }
  }
  &__link {
    color: $dark-green;
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: 300;
    padding: 0 5px;
    background-image: linear-gradient(to right, $mintgreen, $mintgreen);
    background-size: 100% 5%;
    background-position: bottom;
    background-repeat: repeat-x;
    transition: all .15s ease-in-out;

    @media (max-width: 1024px) {
        font-size: 1.5rem;

      }
    @media (max-width: 768px) {
        font-size: 1.1rem;
        padding: 0;
      }
    &:hover {
      background-size: 100% 100%;
      color: $white;
    }
    &__rule {
      background-image: linear-gradient(to right, $red, $red);
    }
    &__article {
      background-image: linear-gradient(to right, $blue, $blue);
    }
    &__link {
      background-image: linear-gradient(to right, $gray, $gray);
    }
  }
}

.active {
  background-size: 100% 100%;
  color: $white;
}
</style>
