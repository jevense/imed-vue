<template>
  <main class="content" @click="scroll">
    <header :style="{'background-image': `url('${section['topImage']}')`}">
      <h1>
        <span v-text="section['sectionId']"></span>
        <span v-text="section['name']"></span>
      </h1>
    </header>
    <article>
      <section v-for="(items,index) in section['section']">
        <div class="section-content" :items="items['section']">
          <template v-for="item in items['section']">
            <book-paragraph :item="item"></book-paragraph>
          </template>
        </div>
        <div v-if="index != section['section'].length-1" class="green"></div>
      </section>
    </article>
    <footer>
      <!--作者相关信息-->
    </footer>
  </main>
</template>

<script>

  import BookParagraph from '../../BookComponent/BookParagraph'

  export default {
    name: 'imed-index',
    props: ['section'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created: function () {
//      console.log(this.pageable)
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      },
      scroll () {
      }
    },
    components: {
      BookParagraph
    }
  }
</script>

<style scoped>

  header {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding: 1rem;
    color: #FFF;
  }

  h1, h2 {
    width: 70%;
  }

  h1 {
    font-size: 1.2rem;
    margin: auto auto 1rem;
  }

  h2 {
    font-size: 1.1rem;
    margin: auto;
  }

  article {
    margin-top: 1rem;
    padding-top: .1rem;
    background-color: white;
  }

  section .section-content {
    padding: 0 1rem 1rem;
  }

  .section-content p {
    text-indent: 2em;
    text-align: justify;
  }

  .green {
    height: 30px;
    background: #ebeff0;
  }

  h3 {
    padding: .5rem;
    margin-top: -1rem;
    display: flex;
  }

  h3 span.tip-title {
    width: 5rem;
    padding: 1rem;
    text-align-last: justify;
    background-color: #1995ED;
    color: #fff;
    border-radius: .2rem 0 .2rem .2rem;
  }

  .arrow {
    height: .4rem;
    overflow: hidden;
  }

  .arrow i {
    display: inline-block;
    border: 20px solid transparent;
    border-left-color: #09F;
  }

</style>
