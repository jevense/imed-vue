<template>
  <drawer :show="this.$store.state['drawerShow']" @change-show="changedShow">
    <!--PanelLeft-->
    <panel-left slot="drawer" @change-show="changedShow"></panel-left>
    <!--Sheet/Header-->
    <sheet-content></sheet-content>
    <!--MainNavigator-->
    <main-navigator></main-navigator>
  </drawer>
</template>

<script>
  import MainNavigator from '../../MainNavigator'
  import PanelLeft from '../PanelLeft/index'
  import Drawer from './drawer.vue'
  import SheetContent from '../Content'

  export default {
    name: 'sheet-home',
    data () {
      return {}
    },
    methods: {
      changedShow () {
        this.$store.commit('changeDrawer', false)
      }
    },
    components: {
      PanelLeft,
      MainNavigator,
      SheetContent,
      Drawer
    }
  }
</script>
<style lang="less">
</style>
