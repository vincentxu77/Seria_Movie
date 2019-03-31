<template>
  <div>
    <div class="detail-top">
      <div class="dt-left">
        <img :src="detailData.images.medium" alt="">
      </div>
      <div class="dt-right">
        <h2>{{detailData.title}}</h2>
        <div>导演：<span v-for="(obj,index) in detailData.directors" :key="index">{{obj.name}}</span> <br /></div>
        <div>电影类型：<span v-for="(obj,index) in detailData.genres" :key="index">{{obj}}/</span><br /></div>
        <div>制片国家/地区：<span v-for="(obj,index) in detailData.countries" :key="index">{{obj}}/</span><br /></div>
        <div>年份：<span>{{detailData.year}}</span></div>
      </div>
    </div>
    <div class="detail-center">
      <hr><h3>主演：</h3><span v-for="(obj,index) in detailData.casts" :key="index">{{obj.name}}/</span>
    </div>
    <div class="detail-bottom">
      <hr><h3>简介：</h3>{{detailData.summary}}
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.getData()
  },
  methods:{
    getData(){
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
      .then((res)=>{
        this.detailData = res.data;
        console.log(res);
        }).catch((res)=>{
          console.log("error!")
      })
    }
  },
    data(){
      return{
        detailData:{},
      }
    }
}
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
