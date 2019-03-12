<template>
  <div>
    <div class="detail-top">
      <div class="dt-left">
        <img :src="detailData.img" alt="">
      </div>
      <div class="dt-right">
        {{detailData.nm}}
      </div>
    </div>
    <div class="detail-center">
      {{detailData.dir}}
    </div>
    <div class="detail-bottom">
      {{detailData.dra}}
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default({
    created () {
      this.getData();
    },
    methods: {
      getData(){
        axios.get(API_PROXY+'http://m.maoyan.com/movie/'+this.detailId+'.json').then((res)=>{
          console.log(res);
          this.detailData = res.data.data.MovieDetailModel
        }).catch((res)=>{
          console.log("error!")
        })
      }
    },
    data(){
      return{
        detailId:this.$route.params.movieId,
        detailData:{}
      }
    }
  })
</script>
<style scoped>
.detail-top{
  display: flex
}
.dt-left{
  flex-grow: 1;
  width: 0;
}
.dt-right{
  flex-grow: 2;
  width: 0
}
</style>
