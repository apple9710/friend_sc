import {defineStore} from 'pinia';


export const useCounterStore = defineStore('counter', {
  state: ()=> ({
    count: 0,
    name: "Counter"
  }),
  getters : (state)=> state.count * 2,
  doubleCountPlusOne(){
    return this.doubleCount + 1
  },

  actions: {
    increment(){
      this.count++
    },
  }

})

