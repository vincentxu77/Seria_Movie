<template>
  <div>
    <aplayer  v-if="isReady" :music= 'music' :list= 'musicList' :showLrc='true'/>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'
export default({
  created () {
    this.getData();
  },
  data(){
    return{
      musicList:[],
      music:{},
      isReady : false
    }
  },
  components: {
    Aplayer
  },
  methods:{
    getData(){
      axios.get('./static/data/musicdata.json').then((res)=>{
        let thisObj = {};
        for(let i=0;i<res.data.musicData.length;i++){
          this.musicList.push({
            title : res.data.musicData[i].title,
            artist : res.data.musicData[i].artist,
            src : res.data.musicData[i].src,
            pic : res.data.musicData[i].pic,
            lrc : 'http://localhost:8080/static/'+res.data.musicData[i].lrc
          });
        }
        
        thisObj.title = res.data.musicData[0].title;
        thisObj.artist = res.data.musicData[0].artist;
        thisObj.src = res.data.musicData[0].src;
        thisObj.pic = res.data.musicData[0].pic;
        thisObj.lrc = 'http://localhost:8080/static/'+res.data.musicData[0].lrc
        this.music = thisObj
        this.isReady = true;
      }).catch(()=>{

      })
    }
  }
})
  
</script>
<style scoped>

</style>



