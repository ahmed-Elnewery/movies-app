import VueRouter from "vue-router"
import MoviesListView from '@/views/MoviesListView.vue'
const routes = [
    { path: '/movies', component: MoviesListView },
 ]
const router = new VueRouter({
    mode: 'history',
    routes 
  })
  export default router