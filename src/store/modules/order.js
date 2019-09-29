import {get,post,post_array_dots} from "../http"
export default {
  namespaced:true,
  state:{
    orders:[],
    message:""
  },
  getters:{
    ordersFilter(state){
      return (status)=>{
        return state.orders.filter(item=>item.status === status)
      }
    }
  },
  mutations:{
    resetOrders(state,orders){
      state.orders = orders;
    },
    resetMessage(state,message){
      state.message = message;
    }
  },
  actions:{
    saveOrder({commit},order){
      return post_array_dots("/order/save",order)
      .then((result)=>{
        commit("resetMessage",result.statusText);
      })
    },
    findOrdersByCustomerId({commit},customerId){
      get("/order/query",{
        customerId
      })
      .then((result)=>{
        commit("resetOrders",result.data);
      })
    },
    findAllOrders({commit}){
      get("/order/findAll")
      .then((result)=>{
        commit("resetOrders",result.data);
      })
    }
    
  }
}