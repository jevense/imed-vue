<template>
  <template v-for="item in items">
    <title v-bind:item="item"></title>
    <template v-if="item.sectionExtend['LONG_EXTEND']||item.sectionExtend['EXTEND_READ']">
      <extend v-bind:item="item.sectionExtend"></extend>
    </template>
    <template v-if="item.mediaBlocks && item.mediaBlocks.length!=0">
      <picture v-bind:item="item"></picture>
    </template>
    <template v-if="item.section && item.section.length!=0">
      <combo v-bind:items="item.section"></combo>
    </template>
  </template>
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
