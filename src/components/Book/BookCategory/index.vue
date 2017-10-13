<template>
  <div>
    <header class="bar bar-nav">
      <h1 class="title">图书目录</h1>
      <a class="button button-link button-nav pull-left" v-tap.prevent="{methods : back}">
        <span class="icon icon-left"></span>返回
      </a>
    </header>
    <div class="content">
      <tab-item v-for="item in chapters" :key="item.id" :item="item"></tab-item>
    </div>
  </div>
</template>

<script>

  import TabItem from './tab-item.vue'

  export default {
    name: 'book-category',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        chapters: []
      }
    },
    created () {
      let url = `${this.$store.state['apiUrl']}/imed/book/${this.$route.params.id}/chapter.json`
      this.$http.get(url).then(response => {
        this.chapters = response.body['chapters']['chapters']
      }, () => {
        console.log('error')
      })
    },
    components: {
      'tab-item': TabItem
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .sildermun {
    display: none;
  }
</style>
