<template>
  <div>
    <button @click="alertVisible = true">Open Dialog</button>
    <alert :visible.sync="alertVisible"></alert>
  </div>
</template>
<script>
  import Alert from './alert.vue'

  export default {
    components: {Alert},
    data () {
      return {
        alertVisible: true
      }
    },
    methods: {
    }
  }
</script>
