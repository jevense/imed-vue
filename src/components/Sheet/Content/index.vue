<template>
  <div>
    <sheet-header @switch-content="switchContent"></sheet-header>
    <!--Sheet/Content-->
    <div class="tabs content">
      <div :class="{tab:true, active: tabId=='local'}">
        <!--<div class="content-padded">-->
        <!--<div class="row carousel">-->
        <!--<div class="col-100">-->
        <!--<img src="https://www.mvwchina.com/images/bannerPic01.jpg"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <div class="content-padded">
          <div class="row book-sheet">
            <div v-for="item in this.books" class="book-item">
              <router-link :to="'/book/'+item['id']+'/chapter'">
                <img :src="item['cover']"/>
              </router-link>
              <div class="book-title">
                <span class="book-status">在线</span>
                <span class="book-name" v-text="item['name']"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="{tab:true,active: tabId=='get'}">
        <div v-for="item in this.books" class="list-block media-list">
          <a href="#" class="item-content">
            <div class="item-media book-item-list">
              <img :src="item['cover']">
            </div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title" v-text="item['name']"></div>
              </div>
              <div class="item-subtitle">主编：卢杰文</div>
              <div class="item-subtitle">大小：800M</div>
            </div>
            <div class="book-operation">
              <a href="#" class="button button-danger">在线阅读</a>
              <a href="#" class="button button-danger">下载到本地</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SheetHeader from '../Header'

  export default {
    name: 'sheet-content',
    data () {
      return {
        tabId: 'local',
        books: []
      }
    },
    created () {
      this.$http.get('http://192.168.8.144:8080/imed/book.json').then(response => {
        this.books = this.books.concat(response.body['books'])
      }, response => {
        console.log('error')
      })
    },
    methods: {
      switchContent (status) {
        this.tabId = status
      }
    },
    components: {
      SheetHeader
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

  .content {
    bottom: 2rem;
  }
</style>
