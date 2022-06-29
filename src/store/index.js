import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
    state:{
        counter:0,
        movies:[]
    },
    getters:{
        getTripleNumber(state){
            return state.counter *3
        }
    },
    mutations:{
        increment(state){
            state.counter +=1
        },
        incrementByNumber(state,payload){
            state.counter+=payload.by   
        },
        getAllMovies(state,payload){
            state.movies= payload
        }
    },
    actions:{
        incrementByOne(context){
            context.commit('increment')
        },
        incrementByPayload(context,payload ){
            context.commit('incrementByNumber',payload)
        },
         getAllMovies(context){
            axios.get("http://localhost:3000/movies/").then((res)=>{
                context.commit('getAllMovies',res.data)
            })
        }
    }
})
export default store