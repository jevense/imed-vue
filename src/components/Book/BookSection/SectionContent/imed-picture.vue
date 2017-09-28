<template>
  <div class="picture-box">
    <div v-for="mb in item.mediaBlocks" class="picture-item">
      <div class="picture-block">
        <a v-for="pi in mb.pictures" class="picture-href">
          <img :src="pi.abbreviation" width="100%"/>
        </a>
      </div>
      <div>{{mb.order + ' ' + mb.name}}</div>
    </div>
  </div>
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
