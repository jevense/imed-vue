<template>
  <div>
    <div class="pic-row" v-for="its in item">
      <div class="pic-col">
        <a :href="it['original']" v-tap.prevent="{methods : showIt}" v-for="it in its['pictures']">
          <!--todo 特效组件待开发-->
          <img :src="it['abbreviation']"/>
        </a>
      </div>
      <div class="pic-title">
        <span v-text="its['order']"></span>
        <span v-text="its['name']"></span>
      </div>
    </div>
  </div>
</template>

<script>

  import BookEffect from '../../../BookEffect'

  export default {
    name: 'book-picture',
    props: ['item'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      },
      showIt () {
        this.$emit('vuedals:new', {
          // Pass these props to the component
          props: {
          },
          component: {
            BookEffect
          }
        })
      }
    }
  }
</script>

<style scoped>
  .pic-row {
    margin: 1rem;
  }

  .pic-col {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pic-col a {
    margin: auto .2rem;
    max-width: 7rem;
    width: 5rem;
    flex-grow: 1;
    border: #CCC 1px solid;
  }

  img {
    width: 100%;
  }

  .pic-title {
    margin-top: .5rem;
    font-size: .7rem;
    border: #e9e8e8 1px solid;
    border-radius: .1rem;
    background: #f5f5f5;
    text-align: center;
  }

  .pic-title span {
    margin: auto .5em;
  }
</style>
