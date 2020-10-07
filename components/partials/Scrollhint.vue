<template>
  <div class="scrollhint">
    <div class="scrollhint__arrow" />
    <p>Scroll down</p>
    <!-- <div class="scrollhint__line"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Scrollhint'
}
</script>

<style lang="scss" scoped>
.scrollhint {
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 18px;
    margin-left: .5rem;
  }
  &__arrow {
    animation: blink 1s ease-in-out infinite alternate;
    position: relative;
    margin-right: .5rem;
    width: 1px;
    height: 50px;
    background-color: $black;
    // border-bottom: 1px solid $black;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      height: 1px;
      width: 10px;
      background-color: $black;
      transform: rotate(45deg) translateY(1px);
      transform-origin: bottom right;
      animation: blink 1s ease-in-out infinite alternate;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 10px;
      background-color: $black;
      transform: rotate(-45deg) translateY(1px);
      transform-origin: bottom left;
      animation: blink 1s ease-in-out infinite alternate;
    }
  }
  &__line {
    margin-left: .5rem;
    width: 150px;
    height: 1px;
    background-color: $black;
  }
  &__animated {
    animation: blink 1s ease-in-out infinite alternate;
  }
  @keyframes blink {
    from {background-color: rgba($black, 1)}
    to {background-color: rgba($black, 0)}
  }
}

</style>
