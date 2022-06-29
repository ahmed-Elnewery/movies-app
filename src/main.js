import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter).use(Vuex)

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
