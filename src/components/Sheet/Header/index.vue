<template>
  <header class="bar bar-nav">
    <div class="bar-front">
      <a class="icon icon-me" v-tap.prevent="{methods : showLeftPanel}"></a>
    </div>
    <div class="buttons-row bar-center">
      <a href="#" :class="{button:true, active: isActive }" @click.prevent="switchContent('local-sheet')">本地书架</a>
      <a href="#" :class="{button:true, active: !isActive }" @click.prevent="switchContent('book-sheet')">已获得图书</a>
    </div>
    <div class="bar-end">
      <router-link v-if="!isActive" class="icon icon-search" to="/sheetHome/search"></router-link>
      <a href="#" v-if="isActive" class="icon icon-menu" to="/sheetHome/search"></a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'sheet-header',
    data () {
      return {
        isActive: this.$store.state['tabId'] === 'local-sheet'
      }
    },
    methods: {
      switchContent (status) {
        this.$store.commit('switchContent', status)
        this.isActive = !this.isActive
      },
      showLeftPanel () {
        this.$store.commit('changeDrawer', true)
      }
    }
  }
</script>

<style scoped>

  .bar-nav {
    top: 0;
    display: flex;
    justify-content: space-between;
  }

  .bar .button {
    top: 0;
  }

  .bar-front {
    padding-right: 10%;
  }
</style>
