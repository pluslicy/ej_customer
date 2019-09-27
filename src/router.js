import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Order from './views/order/index.vue'
import My from './views/my/index.vue'
import CategoryList from './views/home/CategoryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categoryList',
      name: 'categoryList',
      component: CategoryList
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
