<template>
  <main class="content">
    <header>
      <div class="page-header">

      </div>
      <hr>
      <div class="category">

      </div>
      <h1 class="title">

      </h1>
      <div class="author">

      </div>
      <div class="unit">

      </div>
      <div class="abstract">

      </div>
      <div class="keyword">

      </div>
      <div class="detail">

      </div>
      <h1 class="title en">

      </h1>
      <div class="author en">

      </div>
      <div class="unit en">

      </div>
      <div class="abstract en">

      </div>
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

  export default {
    name: 'imed-magazine',
    props: ['section'],
    data () {
      return {
        sections: {}
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

  header {
  }

</style>
