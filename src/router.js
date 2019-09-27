import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Order from './views/order/index.vue'
import My from './views/my/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
