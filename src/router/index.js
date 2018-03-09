import Vue from 'vue'
import Router from 'vue-router'
import Sheet from '../components/Sheet'
import Search from '../components/Sheet/Search'
import Person from '../components/Person'
import BookCategory from '../components/Book/BookCategory'
import BookSection from '../components/Book/BookContent'
import Test from '../Test.vue'

Vue.use(Router)

let homePage = localStorage.getItem('@native')
if (!homePage) {
  homePage = 'sheetHome'
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: homePage
    },
    {
      path: '/sheetHome',
      name: 'sheetHome',
      component: Sheet
    },
    {
      path: '/sheetHome/search',
      name: 'search',
      component: Search
    },
    {
      path: '/book/:id/chapter',
      name: 'book-category',
      component: BookCategory
    },
    {
      path: '/book/1/chapter/1/section/:id',
      name: 'book-section',
      component: BookSection
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
