<template>
  <p :id="'mvw-'+item.id" v-if="item.typeEnum=='HS'" v-html="enhance(item)" style="margin-top:30px;"></p>
  <p :id="'mvw-'+item.id" v-else v-html="enhance(item)"></p>
</template>
<script>
  export default {
    name: 'imed-h1',
    props: ['item'],
    computed: {
      content () {
        return item['paragraphId'] + '' + item['title']
      }
    }
  }
</script>
