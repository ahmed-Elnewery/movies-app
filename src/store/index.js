import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        counter:0
    },
    getters:{
        getTripleNumber(state){
            return state.counter *3
        }
    },
    mutations:{},
    actions:{}
})
export default store