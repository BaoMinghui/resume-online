import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: 0,
    viewValue: 'view-up',
    isWidthEnough: true,
    componentsArr: [
      'index',
      'aboutme',
      'skill',
      'production',
      'contact'
    ],
  },
  mutations: {
    viewValue_up(state) {
      state.viewValue = 'view-up'
    },
    viewValue_down(state) {
      state.viewValue = 'view-down'
    },
    current_up(state) {
      if(state.current>0){
        state.current -=1
      }
    },
    current_down(state) {
      if(state.current<state.componentsArr.length-1){
        state.current += 1
      }
    },
    current_init(state,value){
      state.current = value;
    },

    showSome(state,value){
      state.isWidthEnough = value
    },
  }
})
