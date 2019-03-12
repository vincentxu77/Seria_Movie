<template>
  <ul>
    <li @click="toDetail(index)" v-for="(val,index) in dataList" :key="index">
      <img :src="val.src" alt="">
    </li>
  </ul>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default({
    data(){
      return{
        dataList:[]
      }
    },
    store,
    created () {
      this.$store.commit('routerLinks',{
        color:'rgb(63, 81, 181)',
        title:'图片'
      });
      this.getData();
    },
    methods:{
      getData(){
        axios.get('./static/data/photodata.json').then((res)=>{
          this.dataList = res.data.photoData
        }).catch(()=>{

        })
      },
      toDetail(index){
        this.$router.push({name:'PhotoDetail',params:{photoId:index}})
      }
    },
  })
</script>
<style scoped>
ul{
  display: flex;
  flex-wrap: wrap;
}
ul li {
  width: 50%;
}
</style>

