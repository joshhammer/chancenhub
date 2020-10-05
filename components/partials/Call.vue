<template>
  <div class="call">
    <a href="" class="call__button">
      <span>
        <slot></slot>
      </span>
      <span>Chancen-Call</span>
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
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $dark-green;
    padding: 0.5rem 1rem;
    margin-bottom: .5rem;
    border-radius: 25px;
    max-width: 200px;
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
      font-size: 14px;
    }
    a {
      color: $dark-green;
      text-decoration: underline;
    }
  }
}
</style>
