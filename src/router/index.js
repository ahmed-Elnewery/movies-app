import VueRouter from "vue-router"
import MoviesListView from '@/views/MoviesListView.vue'
import MovieDetails from '@/views/MovieDetails.vue'
import TestPage from '@/views/TestPage.vue'
const routes = [
    { path: '/movies', component: MoviesListView },
    {path:"/",redirect:"/movies"},
    { path: '/movies/:id', component: MovieDetails },
    { path: '/test', component: TestPage },
 ]
const router = new VueRouter({
    mode: 'history',
    routes 
  })
  export default router