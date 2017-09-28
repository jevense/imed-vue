<template>
  <div class="title" level="B2">
    <div class="title-name">
        <span class="X3">
          <span>{{sectionId}}</span>
          <span style="margin: 50px;"></span>
          <span>{{name}}</span>
        </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        sectionId: '第一章',
        name: '骨学'
      }
    }
  }
</script>
