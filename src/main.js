// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Resource from 'vue-resource'
import VueTap from 'v-tap'
import App from './App.vue'
import router from './router'
import store from './store'
// import MathJax from 'mathjax'
// import Navigation from 'vue-navigation'

// Vue.use(Navigation, {router})
Vue.use(VueTap)
Vue.use(Resource)
Vue.config.productionTip = false

// MathJax.Hub.Config({
//   extensions: ['tex2jax.js'],
//   jax: ['input/TeX', 'output/HTML-CSS'],
//   tex2jax: {
//     inlineMath: [['$', '$'], ['\\(', '\\)']],
//     displayMath: [['$$', '$$'], ['\\[', '\\]']],
//     processEscapes: true
//   },
//   'HTML-CSS': {availableFonts: ['TeX']}
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
