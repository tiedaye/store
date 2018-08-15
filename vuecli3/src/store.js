import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      count:15,
      msg:'qqq'
  },
  mutations: {
     add(state,num){
       state.count +=num;
     },
      sub(state,num){
          state.count -=num;
      }
  },
  actions: {
        addaction({ commit },num){
            commit('add',num);
        }
  },
  getters:{
      count100:(state)=>{
        return state.count +100;
      }
  }
});
