<template>
  <nuxt-link to="/" class="logo">
    <div class="logo__wrapper">
      <div class="logo__image">
        <Logo />
      </div>
      <div class="title__wrapper">
        <div class="title__hashtag">
          <h1>#Chancenhub</h1>
        </div>
        <div class="title__claim">
          <p>Was bewegt Marken in Zeiten von Corona? Entdecken Sie aktuelle Best-Practice-Beispiele und sprechen Sie im Chancen-Call mit den kreativsten Köpfen des Landes.</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import Logo from '~/assets/images/logo.svg?inline'
export default {
  components: { Logo }
}
</script>

<style lang="scss" scoped>

.logo {
  text-decoration: none;
  color: $black;
  @media (max-width: 767px) {
        margin-bottom: 1rem;
      }
  &__wrapper {
    display: flex;
  }

  &__image {
    display: inline-block;
    @media (max-width: 767px) {
        display: none;
      }
    svg {
      height: 120px;
      width: 72px;
      color: $black;

      @media (max-width: 767px) {
        height: 60px;
        width: 32px
      }
    }
  }
}

.title {
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    max-width: 300px;
  }
  &__hashtag {
    h1 {
      text-transform: uppercase;
      font-size: 2.5rem;

      @media (max-width: 767px) {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
  &__claim {
    p {
      font-size: 12px;
      @media (max-width: 767px) {
        text-align: center;
      }
    }
  }
}

</style>
