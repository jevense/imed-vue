<template>
  <div :is="'book-'+ item[0]['pictures'][0]['mediaType'].toLowerCase()" :item="item"></div>
</template>

<script>
  import BookAudio from '../BookAudio'
  import BookPicture from '../BookPicture'

  export default {
    name: 'book-medias',
    props: ['item'],
    data () {
      return {}
    },
    components: {
      BookAudio,
      BookPicture,
      'book-video': BookPicture,
      'book-ppt': BookPicture
    }
  }
</script>

<style scoped>
</style>
