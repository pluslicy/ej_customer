
<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/" name="index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/order" name="order" icon="search">订单</van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>  
</template>
<script>
export default {
  data(){
    return {
      active:"index"
    }
  }
}
</script>
<style scoped>

</style>