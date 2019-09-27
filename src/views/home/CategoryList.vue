<template>
  <div id="categoryList">
    <briup-FullPageLayout title="商品分类" @back="backHandler">
     <!-- 左侧导航 -->
     <div class="left_nav">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
     <!-- / 左侧导航 -->
     <!-- 右侧内容 -->
     <div class="products_container">
      <van-row>
        <van-col span="6"><img width="100%" src="../../assets/images/home_19.png" alt=""></van-col>
        <van-col span="12">
          <p class="title">毛衣</p>
          <p class="desc">360°清洗，全面烘干，</p>
          <p class="price">10</p>
        </van-col>
        <van-col span="6">span: 8</van-col>
      </van-row>
     </div>
     <!-- / 右侧内容 -->
    </briup-FullPageLayout>
  </div>  
</template>
<script>
import FullPageLayout from '../../components/FullPageLayout'
export default {
  data(){
    return {
      activeKey:0
    }
  },
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
.left_nav {
  float: left;
}
.products_container {
  margin-left: 85px;
}

</style>