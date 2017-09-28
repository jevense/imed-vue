<template>
  <div id="divScale" class="scaleArea">
    <div id="divScaleContent">
      <div id="divImgs">
        <img :src="whole" class="img"/>
        <img v-for="(par,index) in part" :id="'imgCover-' + index" :src="par.media" class="img imgHide"/>
      </div>
      <div id="divButtons">
        <a v-for="(par,index) in part"
           v-text="par.name"
           :id="'btnCover-' + index"
           :href="'#imgCover-' + index"
           type="button"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'effect-overlying',
    props: ['tabId'],
    data () {
      return {
        whole: '/270102p01a.jpg',
        part: [
          {name: '椎体', media: '/270102p01ac01.png'},
          {name: '椎弓', media: '/270102p01ac02.png'},
          {name: '椎孔', media: '/270102p01ac03.png'}
        ]
      }
    }
  }
</script>

<style scoped>
  #divImgs {
    width: 300px;
    height: 300px;
  }

  #divButtons a {
    margin: 10px;
  }

  .img {
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
  }

  .imgHide {
    height: 0;
  }

  .imgHide:target {
    height: auto;
  }
</style>
