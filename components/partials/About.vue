<template>
  <ul class="about">
    <li><a href="https://www.jvm.ch/de/uber-uns.html">Über uns</a></li>
    <li><a href="https://www.jvm.ch/de/datenschutz.html">Datenschutz</a></li>
    <li><a href="https://www.jvm.ch/de/impressum.html">Impressum</a></li>
  </ul>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  & li {
    margin: 0 1rem 0 0;
    & a {
      text-decoration: underline;
    }
  }
}
</style>
