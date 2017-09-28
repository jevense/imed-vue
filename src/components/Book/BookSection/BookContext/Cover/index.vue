<template>
  <div class="content">
    <img :src="section['picture']"/>
  </div>
</template>

<script>
  export default {
    name: 'imed-cover',
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

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00c7ff;
  }
</style>
