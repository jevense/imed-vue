<template>
  <div class="mvw-extend">
    <div v-if="item" v-for="(value, key) in item">
      <div class="mvw-left">
        <a v-bind:href="value">
          <span class="mvw-text" v-if="key=='LONG_EXTEND'">长学制拓展内容
          </span><span class="mvw-text" v-else-if="key=='EXTEND_READ'">延伸阅读
          </span><span class="icon-list"></span>
        </a>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'book-extend',
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
    }
  }
</script>

<style scoped>

  .mvw-extend{
    margin: 1rem auto;
  }

  .mvw-left {
    text-align: right;
  }

  .mvw-text{
    border-right: 2px solid #C9C9C9;
  }

  .mvw-left span {
    padding: .5rem;
    background-color: #F0F0F0;
    box-shadow: 0 2px 1px #CDCFD3;
    margin: 0;
    border-radius: 1px;
  }

  .icon-list:before {
    content: "\e618";
  }
</style>
