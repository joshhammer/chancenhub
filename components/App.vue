<template>
  <div>
    <Header @send-filter-value="setFilterValue" />
    <Content
      :filter-value="filterValue"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './page/Header'
import Content from './page/Content'
import Footer from './page/Footer'
export default {
  name: 'App',
  components: { Header, Content, Footer },
  data () {
    return {
      filterValue: 'rule'
    }
  },
  methods: {
    setFilterValue (newVal) {
      this.filterValue = newVal
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
