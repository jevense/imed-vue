<template>
  <template v-if="item.typeEnum">
    <template v-if="item.typeEnum=='H1'">
      <h1 :id="'mvw-'+item.id" level="B3"><span class="X5" v-text="item.paragraphId + '' + item.title"></span>
      </h1>
      <hr style="border-bottom:#efefef 1px solid; margin-top:9px; margin-left:100px; margin-right:50px;"/>
    </template>
    <template v-if="item.typeEnum=='H2'">
      <h2 :id="'mvw-'+item.id" level="B4" v-text="item.paragraphId + '' + item.title"></h2>
      <p v-text="item.text"></p>
    </template>
    <template v-if="item.typeEnum=='HT'">
      <p :id="'mvw-'+item.id">
        <span class="three" v-text="item.title"></span>
        <span v-html="enhance(item)" style="margin-left:1em;"></span>
      </p>
    </template>
    <template v-if="item.typeEnum=='Common'">
      <paragraph v-bind:item="item"></paragraph>
    </template>
    <template v-if="item.typeEnum=='HS'">
      <paragraph v-bind:item="item"></paragraph>
    </template>
    <template v-if="item.typeEnum=='Block_Center'">
      <p :id="'mvw-'+item.id" class="med_middle" v-text="item.text"></p>
    </template>
  </template>
</template>
<script>
  import Paragraph from '../SectionContent/paragraph-content.vue'
  export default {
    components: {Paragraph},
    name: 'imed-h-three',
    props: ['item']
  }
</script>
