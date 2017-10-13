<template>
  <div class="content">
    <div class="row carousel">
      <div class="col-100">
        <img src="https://www.mvwchina.com/images/bannerPic01.jpg"/>
      </div>
    </div>
    <div class="row book-sheet">
      <div v-for="item in books" class="book-item">
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
</template>

<script>
  export default {
    name: 'local-sheet',
    props: ['books'],
    methods: {},
    components: {}
  }
</script>

<style scoped>

  .content {
    overflow: scroll;
    margin-bottom: 2.5rem;
  }

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
</style>
