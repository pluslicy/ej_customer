import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    category,
    product
  }
})
