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
          <div>江苏省苏州市昆山市巴城镇学院路828号</div>
        </van-col>
      </van-row>
      <!-- 订单项 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="balance-list-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">订单详情</div>
          <div>江苏省苏州市昆山市巴城镇学院路828号</div>
        </van-col>
      </van-row>
      <!-- 服务时间 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="clock-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">服务时间</div>
          <div>江苏省苏州市昆山市巴城镇学院路828号</div>
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



    </briup-FullPageLayout>
  </div>
</template>
<script>
import FullPageLayout from '../../components/FullPageLayout'

export default {
  components:{
    "briup-FullPageLayout":FullPageLayout
  },
  methods:{
    // 回退
    backHandler(){
      this.$router.back();
    }
  }
}
</script>
<style scoped>
.line {
  
}
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