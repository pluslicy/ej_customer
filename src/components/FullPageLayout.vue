<template>
  <div class="full_page_layout">
    <!-- 导航条 -->
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="toBack"
    />
    <!-- 内容 -->
    <slot/>
  </div>
</template>
<script>
export default {
  props:["title"],
  methods:{
    toBack(){
      // 发射自定义事件back
      this.$emit("back");
    }
  }
}
</script>
<style scoped>
  .full_page_layout{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    background-color: #ffffff
  }
</style>