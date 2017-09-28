<template>
  <div class="content">
    <img :src="section['topImage']"/>
    <div class="table">
      <dl class="auditor">
        <template v-if="section['contents']['CHAIRMAN']">
          <dt>主审</dt>
          <dd>
            <ul>
              <li v-for="item in section['contents']['CHAIRMAN']" v-text="item['name']"></li>
            </ul>
          </dd>
        </template>
        <dt>主编</dt>
        <dd>
          <ul>
            <li v-for="item in section['contents']['CHIEF_EDITOR']" v-text="item['name']"></li>
          </ul>
        </dd>
        <dt>副主编</dt>
        <dd>
          <ul>
            <li v-for="item in section['contents']['ASSOCIATE_EDITOR']" v-text="item['name']"></li>
          </ul>
        </dd>
        <template v-if="section['contents']['ASSISTANT_EDITORS']">
          <dt>主编助理</dt>
          <dd>
            <ul>
              <li v-for="item in section['contents']['ASSISTANT_EDITORS']" v-text="item['name']"></li>
            </ul>
          </dd>
        </template>
      </dl>
      <dl class="editor">
        <dt>编委</dt>
        <dd>（按姓氏笔画排序）</dd>
        <template v-for="item in section['contents']['COMMON_EDITORS']">
          <dt v-text="item['name']"></dt>
          <dd v-text="item['college']"></dd>
        </template>
      </dl>
      <dl class="secretariat">
        <dt>学术秘书</dt>
        <dd></dd>
        <template v-for="item in section['contents']['SECRETARY']">
          <dt v-text="item['name']"></dt>
          <dd v-text="item['college']"></dd>
        </template>
        <dd>人民军医出版社 医视界</dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imed-flyleaf',
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
  img {
    width: 100%;
  }

  dl.auditor dd {
    font-weight: bold;
  }

  dl:not(.auditor) dt:not(:first-child) {
    font-weight: bold;
  }

  dl:not(.auditor) dd:not(:nth-child(2)) {
    color: #555555;
  }

  dl.secretariat dd:last-child {
    font-weight: bold;
    float: left;
  }

  dt {
    width: 20%;
    float: left;
  }

  ul > li {
    display: inline;
    margin: 1em;
  }

  .table {
    width: 100%;
    height: auto;
    margin: 5%;
  }
</style>
