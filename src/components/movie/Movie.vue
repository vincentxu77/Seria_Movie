<template>
  <div>
    <ul>
      <li @click="toDetail(val.id)" class="items" v-for="val in datas" :key="val.id">
        <div class="item-img">
          <img :src="val.img" alt="">
        </div>
        <div class="item-info">
          <h4>{{val.nm}}</h4>
          <p>{{val.ver}}</p>
          <p>主演：{{val.star}}</p>
          <p>{{val.showInfo}}</p>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="isLoading">
      <img src="@/assets/img/loading.gif" alt="">
    </div>
    <div>
      <h3 v-show="isEnd">到底了</h3>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default({
    data(){
      return{
        datas:[],
        isLoading:false,
        isEnd:false,
      }
    },
    store,
    methods:{
      getData(){
        axios.get(API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&offset='+ this.datas.length+'&limit=10')
        .then((response)=> {
          this.datas =this.datas.concat(response.data.data.movies);
          this.isLoading = false;
          console.log(this.datas);
          if(response.data.data.movies.length == 0){
            this.isEnd = true;
          }
        })
        .catch((error) => {
          console.log(error);
        }); 
      },
      toDetail(id){
        this.$router.push({name:'MovieDetail',params:{movieId:id}})
      }
    },
    created () {
      this.$store.commit('routerLinks',{
        color:'rgb(33, 150, 243)',
        title:'电影'
      });
     this.getData();
    },
    mounted () {
      window.onscroll=()=>{
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeigth = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        if(scrollTop+clientHeight==scrollHeigth){
          if(!this.isLoading){
            if(this.isEnd){
            }else{
              this.isLoading = true;
              //setTimeout(()=>{
                this.getData()
              //},200)
            }
          }
        }
      }
    }
  })
</script>
<style scoped>
.items{
  border-bottom: 1px solid #333;
  margin-bottom: .1rem;
  padding-bottom: .1rem;
  display: flex;
}
.item-img{
  flex-grow: 1;
  width: 0;
}
.item-info{
  flex-grow: 2;
  padding-left: 0.1rem;
  width: 0;
}
.loading{
  
}
</style>

