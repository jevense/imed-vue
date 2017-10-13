<template>
  <div>
    <div class="menu-title" v-tap.prevent="{methods : toggle}">
      <span v-text="defaultName(item['chapterId']) + ' ' + item['name']"></span>
    </div>
    <div class="slider-num" v-show="status">
      <ul>
        <li v-for="section in item['sections']">
          <router-link :to="'/book/1/chapter/1/section/'+section['id']">
            <span v-text="defaultName(section['sectionId']) + ' ' + section['name']"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import eventBus from './eventVue'

  export default {
    name: 'tab-item',
    props: ['item'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        status: false,
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
      eventBus.$on('close', () => {
        this.status = false
      })
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      },
      toggle: function () {
        eventBus.$emit('close')
        this.status = true
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
</style>
