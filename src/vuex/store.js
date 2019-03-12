import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  title:"电影",
  color:"rgb(33, 150, 243)",
  detailId:''
}
const mutations={
  routerLinks(state,params){
    state.title = params.title,
    state.color = params.color
  }
}

export default new Vuex.Store({
  state,
  mutations
})
