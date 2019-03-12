<template>
    <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe>
</template>
<script>
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';
  import store from '@/vuex/store'
  export default({
    store,
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    created () {
      this.$store.commit('routerLinks',{
        color:'rgb(121, 85, 72)',
        title:'书籍'
      });
    }
  })
</script>
<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url('https://img3.doubanio.com/view/ark_campaign_pic/large/public/5891.jpg');
  color: #fff;
}

.slide2 {
  background-image: url('https://img1.doubanio.com/view/ark_campaign_pic/large/public/5887.jpg');
  color: #000;
}

.slide3 {
  background: url('https://img1.doubanio.com/view/ark_campaign_pic/large/public/5879.jpg') center/cover;
  color: #fff;
}
</style>

