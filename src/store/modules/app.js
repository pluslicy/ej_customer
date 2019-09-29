export default {
  namespaced:true,
  state:{
    // 当前登录的用户信息
    user:null
  },
  getters:{

  },
  mutations:{
    resetUser(state,user){
      state.user = user;
    }
  },
  actions:{
    login({commit}){
      commit("resetUser",{id:1221650,realname:"张辉"})
    }
  }
}