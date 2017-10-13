<template>
  <div class="content">
    <div v-for="item in books" class="list-block media-list">
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
</template>

<script>
  export default {
    name: 'book-sheet',
    props: ['books'],
    methods: {},
    components: {}
  }
</script>

<style scoped>

  .content {
    bottom: 2rem;
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
