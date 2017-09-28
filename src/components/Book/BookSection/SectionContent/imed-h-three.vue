<template>
  <p>
    <span class="three">{{item.title}}</span>
    <span style="margin-left:1em;">
      <paragraph></paragraph>
    </span>
  </p>
</template>
<script>
  import Paragraph from '../SectionContent/section-paragraph.vue'
  export default {
    components: {Paragraph},
    name: 'imed-h-three',
    props: ['item']
  }
</script>
