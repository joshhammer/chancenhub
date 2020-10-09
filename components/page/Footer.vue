<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <Social />
      <div class="jvm">
        <div class="jvm__top">
          <Contacts />
          <About />
        </div>
        <Brands />
      </div>
      <Scrollhint />
    </div>
  </footer>
</template>

<script>
import Social from '../partials/Social'
import Contacts from '../partials/Contacts'
import About from '../partials/About'
import Brands from '../partials/Brands'
import Scrollhint from '../partials/Scrollhint'

export default {
  name: 'Footer',
  components: { Social, Contacts, About, Brands, Scrollhint }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem;
  background-color: $white;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  @media (max-width: 1024px) {
    padding: 2rem 3rem 2rem 3rem;
  }
  @media (max-width: 768px) {
    position: relative;
    width: auto;
  }
  &__wrapper {
    display: flex;
    @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  }
}

.jvm {
  display: flex;
  flex-direction: column;
  &__top {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
      justify-content: center;
      margin-bottom: 1rem;
    }
  }
}

</style>
