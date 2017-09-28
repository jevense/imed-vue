<template>
  <h2 level="B4">{{title}}</h2>
  <p>{{content}}</p>
</template>
<script>
  export default {
    name: 'imed-h2',
    props: ['item'],
    computed: {
      title(){
        return item['paragraphId'] + '' + item['title'];
      },
      content(){
        return item['text'];
      }
    }
  }
</script>
