<template>
  <div id="home">
    <div class="line1">
      <img width="100%" src="../../assets/images/home_02.png" alt="">
    </div>
    <!-- 栏目 -->
    <ul class="categories">
      <li v-for="i in sixCategoryList" :key="i.id" @click="toCategoryListHandler">
        <div><img src="../../assets/images/home_05.png" alt=""></div>
        <div>{{i.name}}</div>
      </li>
    </ul>
    <!-- 推荐 -->
    <ul class="categories advs">
      <li v-for="i in 3" :key="i">
        <div><img width="50%" src="../../assets/images/home_19.png" alt=""></div>
        <div>衣物</div>
      </li>
    </ul>

  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  created(){
    this.findAllCategories();
  },
  computed:{
    ...mapState("category",{
      categories:"list"
    }),
    ...mapGetters("category",["sixCategoryList"])
  },
  methods:{
    ...mapActions("category",{
      findAllCategories:"findAll"
    }),
    toCategoryListHandler(){
      this.$router.push("/categoryList")
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
  border-collapse: collapse;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
}
.advs > li {
  box-sizing: border-box;
  border-right:  1px solid #ededed;
  overflow: hidden;
  height: 120px;
}
.advs > li img {
  width: 80%;
}
</style>