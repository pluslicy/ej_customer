<template>
  <div id="categoryList">
    <briup-FullPageLayout title="商品分类" @back="backHandler">
      <div class="content">
        <!-- 左侧导航 -->
        <div class="left_nav">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="保洁" />
            <van-sidebar-item title="家电维修" />
            <van-sidebar-item title="月嫂" />
          </van-sidebar>
        </div>
        <!-- / 左侧导航 -->
        <!-- 右侧内容 -->
        <div class="products_container">
          <div class="product" v-for="i in 10" :key="i">
            <van-row >
              <van-col span="6"><img width="100%" src="../../assets/images/home_19.png" alt=""></van-col>
              <van-col span="12">
                <p class="title">毛衣</p>
                <p class="desc">360°清洗，全面烘干，熨烫整形，人工去球</p>
                <p class="price">
                  <span>￥</span> 10
                </p>
              </van-col>
              <van-col class="step">
                <van-stepper v-model="value" input-width="24px" button-size="24px" />
              </van-col>
            </van-row>
          </div>
        </div>
        <!-- / 右侧内容 -->
        <!-- 底部购物车 -->
        <div class="shopcar">
           <van-row >
              <van-col span="5">
                总额 <span style="color:#ff700d;"><i>￥</i>80</span>
              </van-col>
              <van-col span="14"></van-col>
              <van-col span="5" @click="toConfirmOrderHandler">立即下单</van-col>
           </van-row>
        </div>
      </div>
    </briup-FullPageLayout>
  </div>  
</template>
<script>
import FullPageLayout from '../../components/FullPageLayout'
export default {
  data(){
    return {
      activeKey:0,
      value:1,
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
    toConfirmOrderHandler(){
      this.$router.push("/confirmOrder")
    }
  }
}
</script>
<style scoped>
.left_nav {
  position: fixed;
  left: 0;
}
.products_container {
  margin-left: 85px;

}
.product {
  padding: 1em 0;
  border-bottom: 1px solid #ededed;
  position: relative;
}
.product .title {
  font-weight: bold;
}
.product .desc {
  font-size: 10px;
}
.product .price {
  color: #ff700d;
}
.product .step {
  position: absolute;
  bottom: 1em;
  right: .5em;
}
.shopcar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4em;
  background: rgba(0, 0, 0, .3);
  line-height: 4em;
  text-align: center;
  color: #ffffff;
}

</style>