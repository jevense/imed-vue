<template>
  <div class="mvw-content">
    <template v-if="item['text']||item['title']">
      <p v-if="item['typeEnum']=='HF'" v-html="item['text']" class="mvw-hf" style="font-weight: bold"></p>
      <p v-else-if="item['typeEnum']=='HT'" class="mvw-ht"><span v-text="item['title']"></span>{{item['text']}}</p>
      <p v-else v-text="item['text']"></p>
    </template>
    <book-medias :item="item['mediaBlocks']" v-if="item['mediaBlocks'][0]"></book-medias>
    <book-extend v-if="item['sectionExtend']" :item="item['sectionExtend']"></book-extend>
    <template v-if="item['section'][0]" v-for="ite in item['section']">
      <book-paragraph :item="ite"></book-paragraph>
    </template>
  </div>
</template>

<script>
  import BookMedias from '../../BookComponent/BookMedias'
  import BookExtend from '../../BookComponent/BookExtend'

  export default {
    name: 'book-paragraph',
    props: ['item'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      }
    },
    components: {
      BookMedias,
      BookExtend
    }
  }
</script>

<style scoped>
  p {
    margin: .5rem 0;
    text-align: justify;
  }

  .mvw-content p {
    text-indent: 2em;
  }

  p.mvw-hf {
    margin: 0;
  }

  p.mvw-ht {
    margin: 0;
  }

  .mvw-content + .mvw-content {
    margin: .5rem 0 auto;
  }

  .mvw-ht span {
    font-weight: bold;
  }
</style>
