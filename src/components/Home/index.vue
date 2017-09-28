<template>
  <header></header>
  <div class="main">
    <div v-for="item in section" class="wen">
      <title v-bind:item="item"></title>
      <template v-if="item.sectionExtend['LONG_EXTEND']||item.sectionExtend['EXTEND_READ']">
        <extend v-bind:item="item.sectionExtend"></extend>
      </template>
      <template v-if="item.mediaBlocks && item.mediaBlocks.length!=0">
        <picture v-bind:item="item"></picture>
      </template>
      <template v-if="item.section">
        <combo v-bind:items="item.section"></combo>
      </template>
    </div>
  </div>
</template>

<script>
  import Header from './header'
  export default {
    components: {Header},
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
