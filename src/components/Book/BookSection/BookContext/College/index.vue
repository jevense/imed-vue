<template>
  <div class="content">
    <div class="header" :style="{'background-image': 'url(' + section['topImage'] + ')'}">
      国家医学电子书包<br/>全国高等教育医学数字化规划教材建设委员会
    </div>
    <div>委员院校单位（排名不分先后）</div>
    <div class="college">
      <span v-for="name in section['contents']['colleges']">{{name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imed-college',
    props: ['section'],
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
  .header {
    text-align: center;
    color: white;
  }

  .college {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  .college span {
    width: 33%;
    margin: 0.2em 0;
    white-space: nowrap;
  }

</style>
