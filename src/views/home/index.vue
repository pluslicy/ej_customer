<template>
  <div id="home">
    <div class="line1">
      <img width="100%" src="../../assets/images/home_02.png" alt="">
    </div>
    <!-- 栏目 -->
    <ul class="categories">
      <li v-for="(c, index)  in getCategories(6)" :key="c.id" @click="toCategoryListHandler(index)">
        <div><img src="../../assets/images/home_05.png" alt=""></div>
        <div>{{c.name}}</div>
      </li>
    </ul>
    <!-- 推荐 -->
    <ul class="categories advs">
      <li v-for="i in 3" :key="i">
        <div><img src="../../assets/images/home_19.png" alt=""></div>
        <div>衣物</div>
      </li>
    </ul>

  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters("category",["getCategories"])
  },
  methods:{
    toCategoryListHandler(index){
      this.$router.push("/categoryList/"+index)
    }
  }
}
</script>
<style scoped>
.categories {
  text-align: center;
  margin-bottom: .5em;
}
.categories::after {
  content: "";
  clear:both;
  display: block
}
.categories > li {
  width: 33.33333%;
  float: left;
  height: 100px;
}
.advs {
  box-sizing: border-box;
  border-collapse: collapse
}
.advs > li {
  box-sizing: border-box;
  border:  1px solid #ededed;
  overflow: hidden;
  height: 130px;
}
.advs > li img {
  width: 80%;
}
</style>