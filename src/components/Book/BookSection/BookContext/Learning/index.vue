<template>
  <main class="content">
    <section>
      <header>
        <img src="/static/images/med_xxyd.png"/>
      </header>
      <div class="status">
        <img src="/static/images/outline.png"/>
      </div>
      <div class="med-item">
        <a :href="section['shorthand']['id']">
          <img src="/static/images/med_s1.png"/>
        </a>
        <a :href="section['reference']['id']">
          <img src="/static/images/med_s2.png"/>
        </a>
      </div>
      <div class="status">
        <img src="/static/images/inline.png"/>
      </div>
      <div class="med-item">
        <a href="">
          <img src="/static/images/med_s3.png"/></a>
        <a href="l">
          <img src="/static/images/med_s4.png"/>
        </a>
      </div>
    </section>
  </main>
</template>

<script>

  import BookParagraph from '../../BookComponent/BookParagraph'

  export default {
    name: 'imed-learning',
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
    },
    components: {
      BookParagraph
    }
  }
</script>

<style scoped>

  .content {
    background: #ebeff0;
    display: flex;
    text-align: center;
    padding: 1rem;
  }

  section {
    width: 15rem;
    height: 25rem;
    margin: auto;
    background: #FFF;
    border-radius: 15px;
    box-shadow: #a5b2c2 0 0 40px 10px;
  }

  header img {
    width: 10rem;
    margin: 1rem;
  }

  .status img {
    width: 4rem;
    margin: 0 auto .5rem;
  }

  .med-item img {
    width: 40%;
    margin: .5em;
  }


</style>
