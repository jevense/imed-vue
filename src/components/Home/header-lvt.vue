<template>
  <p>
    <span class="three">{{item.title}}</span>
    <span style="margin-left:1em;">
      <paragraph></paragraph>
    </span>
  </p>
</template>
<script>
  import Paragraph from './paragraph'
  export default {
    components: {Paragraph},
    name: 'header-lvt',
    props: ['item']
  }
</script>
