<template>
  <div v-if="item['LONG_EXTEND']">
    <div class="left254">
      <a v-bind:href="item['LONG_EXTEND']">
        长学制拓展内容<span class="icon-list2" style="font-size:30px;"></span>
      </a>
    </div>
    <div class="clear"></div>
  </div>
  <div v-if="item['EXTEND_READ']">
    <div class="left255">
      <a v-bind:href="item['EXTEND_READ']">
        延伸阅读<span class="icon-list2" style="font-size:30px;"></span>
      </a>
    </div>
    <div class="clear"></div>
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
