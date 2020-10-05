<template>
  <div class="call">
    <a href="https://inspiration.jvm.ch/" class="call__button">
      <span>
        <slot />
      </span>
      <span class="call__button__text">Chancen-Call</span>
    </a>
    <div class="call__help">
      <p>Wir helfen schnell und unkompliziert</p>
      <a href="/pdf/Chancen_Angebot_JvM.pdf" target="_blank" rel="noopener noreferrer">Angebots-PDF download</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Call'
}
</script>

<style lang="scss" scoped>
.call {
  @media (max-width: 767px) {
        order: 1;
        margin-bottom: 1rem;
      }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $dark-green;
    padding: 0.75rem 1rem;
    margin-bottom: .5rem;
    border-radius: 25px;
    max-width: 200px;
    transition: background-color 0.2s, box-shadow 0.2s;
    @media (max-width: 767px) {
        padding: .5rem .75rem;
      }
    &:hover {
      background-color: $mintgreen;
      box-shadow: 0 2px 5px rgba($black, .7);
    }
    &__text {
      font-weight: 700;
      font-size: 1.2rem;
      @media (max-width: 767px) {
        font-size: .9rem;
      }
    }
    a {
      display: flex;
      align-items: center;
    }
    span {
      display: inline-block;
      color: $white;
      text-transform: uppercase;
    }
    svg {
      height: 20px;
      width: 20px;
      color: white;
      margin-right: .5rem;
    }
  }
  &__help {
    display: flex;
    flex-direction: column;
    align-items: center;
    p, a {
      font-size: 12px;
    }
    a {
      color: $dark-green;
      text-decoration: underline;
    }
  }
}
</style>
