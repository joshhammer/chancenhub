<template>
  <a href="https://chancen.jvm.ch/die-bargeldlose-gewohnheit" class="card card__animated" :style="{ backgroundColor: backgroundColor }">
    <div class="card__inner">
      <p>{{ type === 'rule' ? '#Spielregeln' : type === 'article' ? '#Artikel' : '#Bestpractice' }}</p>
      <h1 :style="titleSize">{{ title }}</h1>
    </div>
    <div class="card__overlay">
      <h2 v-if="type === 'rule'">#{{ cardId }}</h2>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: null
    },
    creationDate: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    cardId: {
      type: Number,
      default: null
    },
    backgroundColor: {
      type: String,
      default: null
    }
  },
  computed: {
    titleSize () {
      return this.title.length > 60
        ? { fontSize: '1.25rem' } : this.title.length > 50
          ? { fontSize: '1.5rem' } : this.title.length > 30
            ? { fontSize: '1.75rem' } : this.title > 20
              ? { fontSize: '2rem' } : this.title > 10
                ? { fontSize: '2.25rem' } : null
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
}

.card {
  position: relative;
  padding: 20px;
  min-width: 200px;
  border: 1px solid rgba($black, 0.05);
  overflow: hidden;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;
    & h2 {
      font-size: 10rem;
      color: $white;
    }
  }
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  & h1 {
    color: $white;
    font-size: 2.5rem;
    text-transform: uppercase;
    @media (max-width: 2199px) {
      font-size: 2.15rem;
    }
    @media (max-width: 1199px) {
      font-size: 2.75rem;
    }
    @media (max-width: 999px) {
      font-size: 2.1rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  & p {
    color: $white;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  &__animated {
    display: inline-block;
    transition-duration: 0.2s;
    transition-property: background-color, box-shadow transform;
  }
  &__animated:hover, &__animated:focus, &__animated:active {
    background-color: $mintgreen;
    box-shadow: 0 4px 15px rgba($black, 0.6);
    transform: scale(1.025);
  }
}
</style>
