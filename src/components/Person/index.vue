<template>
  <div>
    <header class="bar bar-nav">
      <h1 class='title'>搜索栏</h1>
      <router-link class="button button-link button-nav pull-left open-panel" to="/sheetHome">
        <span class="icon icon-left"></span>返回
      </router-link>
    </header>
    <div class="content">
      <div class="list-block media-list">
        <ul>
          <li>
            <router-link :to="{ path: '/sheetHome'}" class="item-link item-content">
              <div class="item-media person">
                <img
                  src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg">
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">卢杰文</div>
                </div>
                <div class="item-subtitle">15110080976</div>
              </div>
            </router-link>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title">商品名称</div>
              <div class="item-after">电子书包</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .panel {
    background-color: white;
  }

  .person {
    width: 25%;
  }

  .person img {
    width: 100%;
    height: 3rem;
  }
</style>
