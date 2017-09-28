<template>
  <div class="content">
    <img :src="section['topImage']"/>
    <h3 v-text="section['name']"></h3>
    <section>
      <p v-for="item in section['section']" v-text="item['text']"></p>
    </section>
  </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
  h3{
    position: absolute;
    top: 2em;
  }

  section{
    padding: .5em;
  }

  section p{
    text-indent: 2em;
  }
</style>
