<template>
  <div id="confirmOrder">
    <briup-FullPageLayout title="订单确认" @back="backHandler">
      <!-- 地址 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="location-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">服务地址</div>
          <div @click="toAddressListHandler">江苏省苏州市昆山市巴城镇学院路828号</div>
        </van-col>
      </van-row>
      <!-- 订单项 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="balance-list-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">订单详情</div>
          <div>
            <van-row>
              <van-col :span="8">拖地</van-col>
              <van-col :span="8">x1</van-col>
              <van-col :span="8">20</van-col>
            </van-row>
            <van-row>
              <van-col :span="8">擦玻璃</van-col>
              <van-col :span="8">x1</van-col>
              <van-col :span="8">20</van-col>
            </van-row>
          </div>
        </van-col>
      </van-row>
      <!-- 服务时间 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="clock-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">服务时间</div>
          <div @click="()=>{this.show = true}">请选择时间</div>
        </van-col>
      </van-row>
      <!-- 支付方式 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="gold-coin-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">支付方式</div>
          <div>第三方平台（支付宝）</div>
        </van-col>
      </van-row>

      <van-popup v-model="show" position="bottom"  >
        <van-datetime-picker v-model="currentDate" type="datetime"/>
      </van-popup>

      <!-- 按钮 -->
      <div style="position:fixed;bottom:0;width:100%" >
        <van-button  type="info" size="large" @click="confirmOrderHandler">确认订单</van-button>
      </div>
    </briup-FullPageLayout>
  </div>
</template>
<script>
import FullPageLayout from '../../components/FullPageLayout'

export default {
  data(){
    return {
      currentDate:new Date(),
      show:false
    }
  },
  components:{
    "briup-FullPageLayout":FullPageLayout
  },
  methods:{
    // 回退
    backHandler(){
      this.$router.back();
    },
    // 地址列表
    toAddressListHandler(){
      this.$router.push("/addressList");
    },
    confirmOrderHandler(){
      this.$router.push("/order")
    }
  }
}
</script>
<style scoped>
.line  .line-left {
  padding: 1em 0;
  text-align: center;
  font-size: 24px;
}
.line  .line-right {
  padding: 1em 0;
  border-bottom: 1px solid #ccc;
}
.line  .line-right > .label {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  line-height: 2em;
}
</style>