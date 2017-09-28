<template>
  <p :class="classStyle">
    <paragraph></paragraph>
  </p>
</template>
<script>
  import Paragraph from './section-paragraph.vue'

  export default {
    components: {Paragraph},
    name: 'content',
    data () {
      return {
        sectionId: '第一章',
        name: '骨学'
      }
    },
    computed: {
      classStyle () {
        return {
          top: this.item['typeEnum'] === 'HS',
          med_middle: this.item['typeEnum'] === 'Block_Center',
        }
      }
    }
  }
</script>
<style scoped>
  .top {
    margin-top: 30px;
  }

  .med_middle {
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
    position: relative
  }
</style>
