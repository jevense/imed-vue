<template>
  <div>
    <header class="bar bar-nav">
      <h1 class="title" v-text="defaultName(section['sectionId']) + section['name']"></h1>
      <a class="button button-link button-nav pull-left" v-tap.prevent="{methods : back}">
        <span class="icon icon-left"></span>返回
      </a>
    </header>
    <!--<vue-pull-refresh :on-refresh="onRefresh">-->
    <imed-section :section="section"/>
    <!--</vue-pull-refresh>-->
  </div>
</template>

<script>

  import BookSection from 'imed-html-reader'

  export default {
    name: 'book-content',
    props: ['tabId'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        template: '',
        section: {
          name: ''
        }
      }
    },
    created () {
      let url = `${this.$store.state['apiUrl']}/book/1/chapter/1/section/${this.$route.params.id}.json`
      this.$http.get(url).then(response => {
        this.section = response.body['section']
        this.template = 'imed-' + this.section['template']
      }, error => {
        console.log(error)
      })
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      },
      back () {
        this.$router.go(-1)
      },
      onRefresh: function () {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve()
          }, 1000)
        })
      }
    },
    components: {
      'imed-section': BookSection
    }
  }
</script>

<style scoped>

</style>
