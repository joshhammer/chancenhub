<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from './page/Header'
import Content from './page/Content'
export default {
  name: 'App',
  components: { Header, Content }
}
</script>

<style lang="scss" scoped>

</style>
