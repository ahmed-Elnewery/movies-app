import VueRouter from "vue-router"
import MoviesListView from '@/views/MoviesListView.vue'
import MovieDetails from '@/views/MovieDetails.vue'
const routes = [
    { path: '/movies', component: MoviesListView },
    { path: '/movies/:id', component: MovieDetails },
 ]
const router = new VueRouter({
    mode: 'history',
    routes 
  })
  export default router