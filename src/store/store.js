import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    situations: []
  },
  mutations: {
    increment: (state,value) => {
      const obj = state
      obj.situations.push(value)
    },
    decrement: (state,index) => {
      console.log('index',index)
      const obj = state
      obj.situations.splice(index,1)
    },
    clerament:(state,index)=>{
      const obj = state
      obj.situations.splice(0,obj.situations.length);
    }
  }
})

export default store