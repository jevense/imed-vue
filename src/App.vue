<template>
  <!--<navigation>-->
  <!--<transition :name="transitionName">-->
  <router-view></router-view>
  <!--</transition>-->
  <!--</navigation>-->
</template>

<script>
  import 'normalize.css'

  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    components: {}
//    ,
//    watch: {
//      '$route' (to, from) {
//        const toDepth = to.path.split('/').length
//        const fromDepth = from.path.split('/').length
//        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//        console.log(this.transitionName)
//      }
//    }
  }
</script>
<style lang="less">
  @import "assets/sm";
</style>
