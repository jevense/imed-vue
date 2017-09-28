<template>
  <template v-if="authors">
    （
    <template v-for="author in authors">
      {{author['name']}}<a :href="'${pageContext.request.contextPath}/author/'+author['id']"><b text="123"><span
      class="icon-stack-2"> </span></b></a>
    </template>
    ）
  </template>
</template>
<script>
  export default {
    name: 'section-author',
    data () {
      return {
        authors: result["authors"]
      }
    }
  }
</script>
