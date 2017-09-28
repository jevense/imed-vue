<template>
  <div>
    <header class="bar bar-nav">
      <h1 class="title">图书目录</h1>
      <a class="button button-link button-nav pull-left" v-tap.prevent="{methods : back}">
        <span class="icon icon-left"></span>返回
      </a>
    </header>
    <div class="content">
      <div class="list-block contacts-block">
        <div v-for="item in chapters" class="list-group">
          <ul>
            <li class="list-group-title" v-text="defaultName(item['chapterId']) + ' ' + item['name']"></li>
            <li v-for="section in item['sections']">
              <router-link :to="'/book/1/chapter/1/section/'+section['id']">
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title" v-text="defaultName(section['sectionId']) + ' ' + section['name']"></div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'book-category',
    props: ['tabId'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        chapters: []
      }
    },
    created () {
      let url = `http://192.168.8.144:8080/imed/book/${this.$route.params.id}/chapter.json`
      this.$http.get(url).then(response => {
        this.chapters = response.body['chapters']['chapters']
      }, response => {
        console.log('error')
      })
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
  .carousel {
    max-height: 3rem;
  }

  .carousel img {
    width: 100%;
  }

  .book-sheet {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: scroll;
  }

  .book-item {
    max-height: 10rem;
    width: 28%;
    margin-left: 4%;
  }

  .book-item img {
    height: 8rem;
    width: 100%;
  }

  .book-status {
    font-size: small;
  }

  .book-name {
    font-size: small;
  }

  .list-block {
    margin: 0;
  }

  .book-item-list {
    width: 25%;
  }

  .book-item-list img {
    height: 6rem;
    width: 100%;
  }

  .list-block .book-operation {
    margin: 0.5rem;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
