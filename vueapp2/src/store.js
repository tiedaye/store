import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    bgColor:'rgb(33, 150, 243)',
      title:'Movie',
      photoList:[]
  },
  mutations:{
        changbg(state,menu){
           state.bgColor = menu.bgColor;
           state.title = menu.title;
        },
      photo(state,list){
          state.photoList = list;
      }
  },
  actions:{
        changbg({commit},menu){
           commit('changbg',menu)
        },
       setPhoto({commit},list){
          commit('photo',list)
      }
  },
});
