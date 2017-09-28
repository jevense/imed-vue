<template>
  <nav class="bar bar-tab">
    <a class="tab-item active" href="#">
      <span class="icon icon-download"></span>
      <span class="tab-label">书架</span>
    </a>
    <a class="tab-item" href="#">
      <span class="icon icon-app"></span>
      <span class="tab-label">书城</span>
    </a>
    <a class="tab-item" href="#">
      <span class="icon icon-share"></span>
      <span class="tab-label">数据库</span>
    </a>
    <a class="tab-item" href="#">
      <span class="icon icon-edit"></span>
      <span class="tab-label">考试</span>
    </a>
    <a class="tab-item" href="#">
      <span class="icon icon-caret"></span>
      <span class="tab-label">教程</span>
    </a>
  </nav>
</template>

<script>
  export default {
    name: 'main-navigator',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .bar-tab {
    bottom: 0;
  }
</style>
