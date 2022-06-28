<script>
import Container from "@/components/layout/Container.vue";
import MovieSearch from "@/components/MovieSearch/index.vue";
import axios from "axios";
import MovieCard from "@/components/Movies/MovieCard.vue";
import Spinner from "@/components/UI/Spinner.vue";
export default {
  components: { Container, MovieSearch, MovieCard, Spinner },
  data() {
    return {
      loading: false,
      movies: [],
      errorMsg: "",
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        const { data } = res;
        this.movies = data;
        this.loading = false;
      })
      .catch(() => {
        this.errorMsg = "Opps! something went wrong";
        this.loading = false;
      });
  },
};
</script>
<template>
  <div class="h-full">
    <Container>
      <div class="h-full py-8 flex flex-col">
        <MovieSearch />
        <div class="flex justify-end mb-6">
          <div>
            <button type="button">toggle sorting</button>
          </div>
        </div>
        <div class="flex-grow">
          <div class="flex items-center justify-center" v-if="loading">
            <Spinner />
          </div>
          <div class="grid gap-y-3" v-else>
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </div>
        <div class="flex items-center justify-center mt-6">
          <ul class="flex items-center gap-x-4">
            <li>
              <button
                class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 h-8"
              >
                1
              </button>
            </li>
            <li>
              <button
                class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 h-8"
              >
                2
              </button>
            </li>
            <li>
              <button
                class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 h-8"
              >
                3
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
</template>
<style></style>
