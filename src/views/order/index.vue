<template>
  <div id="order">
    <van-nav-bar fixed :title="'我的订单'" />
    <div class="content">
      <van-tabs v-model="activeName">
        <van-tab title="全部订单" name="a">
          <ul>
            <li class="order" v-for="i in 4" :key="i">
              <van-row>
                <van-col :span="6">
                  <img width="90%" src="../../assets/images/home_21.png" alt="">
                </van-col>
                <van-col :span="18">
                  <p class="title">打扫房间</p>
                  <p class="price">￥120</p>
                  <p class="status">交易完成</p>
                </van-col>
              </van-row>
            </li>
          </ul>
        </van-tab>
        <van-tab title="待付款" name="b">内容 2</van-tab>
        <van-tab title="待服务" name="c">内容 3</van-tab>
        <van-tab title="待评价" name="d">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      activeName:"a"
    }
  }
}
</script>
<style scoped>
#order .content {
  padding-top: 46px;
}
.order {
  padding: .5em;
  margin-bottom: 1em;
  border-bottom: 1px solid #ededed;
  /* box-shadow: 0 1px 5px rgba(0,0,0,0.3) */
  height: 6em;
  overflow-y: hidden;
}
.order .title {
  line-height: 2em;
}
.order .price {
  color: #ff700d;
  line-height: 2em;
}
.order .status {
  line-height: 2em;
}
</style>