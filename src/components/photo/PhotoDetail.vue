<template>
  <v-touch @tap="goBack" @swipeleft="onSwipeLeft" @swiperight="onSwipeRigth" class="content" :style="styleObj">
    <!-- <h1>photo detail</h1> -->
    <!-- {{$route.params.photoId}} -->
  </v-touch>
</template>
<script>
  import Vue from 'vue'
  import VueTouch from 'vue-touch'
  import store from '@/vuex/store'
  Vue.use(VueTouch,{name:'v-touch'})
  export default({
    data () {
      return {
        thisIndex:this.$route.params.photoId+1,
      }
    },
    computed: {
      styleObj(){
        return  `background: #000 url('/static/img/${this.thisIndex}.jpg') no-repeat center/contain;`
      }
    },
    store,
    created () {
      this.$store.commit('routerLinks',{
        color:'rgb(63, 81, 181)',
        title:'图片'
      });
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      onSwipeLeft(){
        if(this.thisIndex==0){
          // this.thisIndex =0;
        }else{
          this.thisIndex--
        }
        
        
      },
      onSwipeRigth(){
        this.thisIndex++
      }
    }
  })
</script>
<style scoped>
  .content{
    /* background: #000 url('/static/img/1.jpg') no-repeat center/contain; */
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
</style>
