<template>
  <div class="laba">
    <img :src="item[0]['pictures'][0]['abbreviation']"/>
  </div>
</template>

<script>
  export default {
    name: 'book-audio',
    props: ['item'],
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
  .laba img {
    width: 1.5rem;
  }
</style>
