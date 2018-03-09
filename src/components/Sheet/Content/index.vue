<template>
  <div>
    <sheet-header />
    <!--Sheet/Content-->
    <div :is="this.$store.state['tabId']" :books="books"></div>
  </div>
</template>

<script>
  import SheetHeader from '../Header'
  import BookSheet from './book-sheet.vue'
  import LocalSheet from './local-sheet.vue'

  export default {
    name: 'sheet-content',
    data () {
      return {
        books: []
      }
    },
    created () {
      this.$http.get(`${this.$store.state['apiUrl']}/book.json`).then(response => {
        this.books = this.books.concat(response.body['books'])
      }, () => {
        console.log('error')
      })
    },
    methods: {
      switchContent (status) {
        this.tabId = status
      }
    },
    components: {
      SheetHeader,
      'local-sheet': LocalSheet,
      'book-sheet': BookSheet
    }
  }
</script>

<style scoped>
</style>
