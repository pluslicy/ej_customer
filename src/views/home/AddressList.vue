<template>
  <div id="addressList">
    <briup-FullPageLayout title="地址列表" @back="backHandler">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        add-button-text="确认"
        @add="onAdd"
        @edit="onEdit" />

    </briup-FullPageLayout>
  </div>  
</template>
<script>
import FullPageLayout from '../../components/FullPageLayout'
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
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
    onAdd() {
      this.backHandler();
    },

    onEdit(item, index) {
      alert('编辑地址:' + index);
    }
  }
}
</script>
<style scoped>

</style>