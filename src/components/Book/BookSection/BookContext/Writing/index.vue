<template>
  <div class="content">
    <div class="header" :style="{'background-image': 'url(' + section['topImage'] + ')'}">
      国家医学电子书包<br/>全国高等教育医学数字化规划教材建设委员会
    </div>
    <div class="consultant">
      <div style="text-align: center">组织结构</div>
      <div>编写委员会</div>
      <div>主任委员</div>
      <div v-for="item in section['contents']['DIRECTOR']">
        {{item['name']}}&nbsp;&nbsp;&nbsp;&nbsp;{{item['unit']}}
      </div>
      <table>
        <tr>
          <th colspan="2">常务副主任委员（按姓名汉语拼音排序）</th>
        </tr>
        <tr v-for="item in section['contents']['EXECUTIVE_DIRECTOR']">
          <td v-text="item['name']"></td>
          <td v-text="item['unit']"></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="2">副主任委员兼秘书长（按姓名汉语拼音排序）</th>
        </tr>
        <tr v-for="item in section['contents']['SECRETARY_GENERAL']">
          <td v-text="item['name']"></td>
          <td v-text="item['unit']"></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="2">副主任委员（按姓名汉语拼音排序）</th>
        </tr>
        <tr v-for="item in section['contents']['DEPUTY_DIRECTOR']">
          <td v-text="item['name']"></td>
          <td v-text="item['unit']"></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="2">委员（按姓名汉语拼音排序）</th>
        </tr>
        <tr v-for="item in section['contents']['COMMISSIONER']">
          <td v-text="item['name']"></td>
          <td v-text="item['unit']"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imed-writing',
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

  td:nth-child(2) {
    padding: 0 1em;
  }

</style>
