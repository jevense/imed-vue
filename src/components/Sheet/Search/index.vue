<template>
  <div>
    <header class="bar bar-nav">
      <h1 class='title'>搜索栏</h1>
      <router-link class="button button-link button-nav pull-left" to="/sheetHome">
        <span class="icon icon-left"></span>返回
      </router-link>
    </header>
    <div class="bar bar-header-secondary">
      <div class="searchbar">
        <a class="searchbar-cancel">取消</a>
        <div class="search-input">
          <label class="icon icon-search" for="search"></label>
          <input type="search" id='search' placeholder='输入关键字...'/>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-block-title">热门搜索</div>
      <div class="list-block">
        <div class="list-group">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">老年</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">卫生法</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题3</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题4</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题5</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题6</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题7</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题8</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-block">
        <div class="list-group">
          <ul>
            <li class="list-group-title">搜索历史</li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">老年</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">卫生法</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题3</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题4</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题5</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题6</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题7</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">标题8</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
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
