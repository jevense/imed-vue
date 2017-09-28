<template>
  <div class="content">
    <div class="roundbox">
      <div>国家医学电子书包—</div>
      <div>全国高等教育医学数字化规划教材官网
        <span>
          <a href="http://www.imed.org.cn/">www.imed.org.cn</a>
        </span>
      </div>
      <div>人民军医出版社官网
        <span>
        <a href="http://www.pmmp.com.cn/">www.pmmp.com.cn</a>
        </span>
      </div>
      <div>医视界官网<span>
        <a href="http://www.mvwchina.com/index/article.jhtml?action=qianArticle">www.mvwchina.com</a></span>
      </div>
    </div>
    <div class="banquan">
      <div>版权所有，侵权必究！</div>
      <div>
        <span class="quan1">版权声明：</span>
        <span class="quan2">全国高等教育医学数字化规划教材（国家医学电子书包）刊载的所有内容，包括文字、图片、音频、视频、动画、软件、程序以及网页、版式设计等均归著作权人所有。</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imed-imprint',
    props: ['section'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
