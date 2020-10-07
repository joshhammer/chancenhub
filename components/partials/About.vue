<template>
  <div>
    <ul class="jvm-about">
      <li><a href="https://www.jvm.ch/de/uber-uns.html">Über uns</a></li>
      <li><a href="https://www.jvm.ch/de/datenschutz.html">Datenschutz</a></li>
      <li><a href="https://www.jvm.ch/de/impressum.html">Impressum</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.jvm-about {
  display: flex;
  margin: 0 0 0.5rem 0;
  & li {
    margin: 0 1rem 0 0;
    & a {
      text-decoration: underline;
      font-weight: 300;
    }
  }
}
</style>
