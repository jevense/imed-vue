<template>
  <h1 level="B3"><span class="X5">{{content}}</span></h1>
  <hr style="border-bottom:#efefef 1px solid; margin-top:9px; margin-left:100px; margin-right:50px;"/>
</template>
<script>
  export default {
    name: 'imed-h1',
    props: ['item'],
    computed: {
      content(){
        return item['paragraphId'] + '' + item['title'];
      }
    }
  }
</script>
