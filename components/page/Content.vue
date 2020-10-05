<template>
  <div>
    <h1
      v-for="article in articles"
      :key="article.id">{{ article.title }}
    </h1>
  </div>
</template>

<script>
import data from '../../assets/data/data.js'
export default {
  name: 'Content',
  data () {
    return {
      articles: data
    }
  }
}
</script>
