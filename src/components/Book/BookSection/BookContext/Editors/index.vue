<template>
  <div class="content">
    <img :src="section['topImage']"/>
    <div>教材目录</div>
    <table>
      <tr>
        <th width="10%"></th>
        <th width="30%">学科</th>
        <th width="20%">主审</th>
        <th width="20%">主编</th>
        <th width="20%">副主编</th>
      </tr>
      <tr v-for="(item, index) in section['contents']">
        <td v-text="index + 1"></td>
        <td v-text="item['subject']"></td>
        <td>
          <span v-for="name in item['CHAIRMAN']" v-text="name"></span>
        </td>
        <td>
          <span v-for="name in item['CHIEF_EDITOR']" v-text="name"></span>
        </td>
        <td v-if="item['ASSOCIATE_EDITOR']">
          <span v-for="name in item['ASSOCIATE_EDITOR']" v-text="name"></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'imed-editors',
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
  .content{
    background-color: white;
  }

  img {
    width: 100%;
  }

  tr:nth-child(even) {
    background-color: #ededed;
  }

  td {
    border: 1px solid #c9c5c4;
    padding: 2%;
  }

  td span {
    display: block;
  }
</style>
