<template>
  <div class="content">
    <div class="header" :style="{'background-image': 'url(' + section['topImage'] + ')'}">
      国家医学电子书包<br/>全国高等教育医学数字化规划教材建设委员会
    </div>
    <div class="consultant">
      <div style="text-align: center">组织结构</div>
      <div>顾问委员会</div>
      <div>总顾问</div>
      <div v-for="item in section['contents']['CHIEF_CONSULTANT']">
        {{item['name']}}&nbsp;&nbsp;&nbsp;&nbsp;{{item['unit']}}
      </div>
      <div>顾问</div>
      <table>
        <tr v-for="item in section['contents']['CONSULTANT']">
          <td v-text="item['name']"></td>
          <td v-text="item['unit']"></td>
          <td v-text="item['dutyTitle']"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imed-consultant',
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

  .consultant {
    margin: 0.5rem;
  }

  td:first-child {
    width: 3em;
    text-align: justify;
    text-align-last: justify;
  }

  td:nth-child(2){
    padding: 0 1em;
  }

</style>
