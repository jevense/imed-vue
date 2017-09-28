<template>
  <span v-html="result"></span>
</template>
<script>
  export default {
    name: 'paragraph-content',
    props: ['item'],
    data () {
      return {result: ''}
    },
    created: function () {
      let para = item['text']
      for (let keyword of item['keyWord']) {

        let source = keyword['name']
        let target = ''
        if (!!(keyword.type & 1)) {//链接特效
          target += keyword['name'] + '<a href="' + keyword['link'] + '"><b><span class="icon-image"></span></b></a>'
        }
        if (!!(keyword.type >> 3 & 1)) {//切换特效
          target += keyword['name'] + '<a v-link="{ path: \'/picture' + '' + '\'}"><b><span class="icon-image"></span></b></a>'
        }
        if (!!(keyword.type >> 1 & 1)) {//加粗特效
          target += '<strong>' + keyword['name'] + '<\/strong>'
          if (!!keyword['word']) {
            source += '（' + keyword['word'] + '）'
            target += '（' + keyword['word'] + '）'
          }
        }
        if (!!(keyword.type >> 2 & 1)) {
          target += '<dfn title="' + source + '"><b class="mm1"><span class="icon-chat"></span></b></dfn>'
        }
        para = para.replace(source, target)
      }
      this.result = para
    }
  }
</script>
