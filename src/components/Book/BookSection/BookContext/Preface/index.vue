<template>
  <div class="content">
    <img :src="section['topImage']"/>
    <h3 v-text="section['name']"></h3>
    <section>
      <template v-for="item in section['section']">
        <book-paragraph :item="item"></book-paragraph>
      </template>
    </section>
  </div>
</template>

<script>
  import BookParagraph from '../../BookComponent/BookParagraph'

  export default {
    name: 'imed-preface',
    props: ['section'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      }
    },
    components: {
      BookParagraph
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }

  h3 {
    position: absolute;
    top: 2em;
  }

  section {
    padding: .5em;
  }

  section p {
    text-indent: 2em;
  }
</style>
