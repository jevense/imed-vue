<template>
  <div>
    <header class="bar bar-nav">
      <h1 class="title" v-text="defaultName(section['sectionId']) + section['name']"></h1>
      <a class="button button-link button-nav pull-left" v-tap.prevent="{methods : back}">
        <span class="icon icon-left"></span>返回
      </a>
    </header>
    <!--<vue-pull-refresh :on-refresh="onRefresh">-->
    <div :is="template" :section="section"></div>
    <!--</vue-pull-refresh>-->
  </div>
</template>

<script>

  import BookCover from './BookContext/Cover'
  import BookFlyleaf from './BookContext/Flyleaf'
  import BookImprint from './BookContext/Imprint'
  import BookEditors from './BookContext/Editors'
  import BookConsultant from './BookContext/Consultant'
  import BookWriting from './BookContext/Writing'
  import BookCollege from './BookContext/College'
  import BookPreface from './BookContext/Preface'
  import BookMainPoint from './BookContext/MainPoint'
  import BookSection from './BookContext/Section'
  import BookLearning from './BookContext/Learning'
  import VuePullRefresh from 'vue-pull-refresh'
  import BookMagazine from './BookMagazine'

  export default {
    name: 'book-section',
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
      this.template = 'imed-magazine'
      let url = `${this.$store.state['apiUrl']}/imed/book/1/chapter/1/section/${this.$route.params.id}.json`
      this.$http.get(url).then(response => {
        this.section = response.body['section']
        this.template = 'imed-' + this.section['template']
      }, response => {
        console.log('error')
        this.template = 'imed-magazine'
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
      'imed-cover': BookCover,
      'imed-flyleaf': BookFlyleaf,
      'imed-editors': BookEditors,
      'imed-consultant': BookConsultant,
      'imed-writting': BookWriting,
      'imed-college': BookCollege,
      'imed-preface': BookPreface,
      'imed-foreword': BookPreface,
      'imed-main-point': BookMainPoint,
      'imed-index': BookSection,
      'vue-pull-refresh': VuePullRefresh,
      'imed-learning': BookLearning,
      'imed-magazine': BookMagazine,
      'imed-imprint': BookImprint
    }
  }

  // todo imed-writting 服务端拼写错误
</script>

<style scoped>

</style>
