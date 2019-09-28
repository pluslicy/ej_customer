import { get } from "../http"
export default {
  namespaced:true,
  state:{
    list:[]
  },
  getters:{
    shopProducts(state){
      state.list.forEach((item)=>{
        item.number = 0;
      })
      return state.list;
    }
  },
  mutations:{
    resetList(state,list){
      state.list = list;
    }
  },
  actions:{
    findProductByCategoryId({commit},id){
      get("/product/findByCategoryId?id="+id)
      .then((result)=>{
        commit("resetList",result.data)
      })
    }
  }
}