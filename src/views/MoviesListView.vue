<script>
import Container from "@/components/layout/Container.vue";
import MovieSearch from "@/components/MovieSearch/index.vue";
import axios from "axios";
import MovieCard from "@/components/Movies/MovieCard.vue";
import Spinner from "@/components/UI/Spinner.vue";
import MoviePagination from "@/components/Movies/MoviePagination.vue";
import OptionsTab from "@/components/Movies/OptionsTab.vue";
export default {
  components: {
    Container,
    MovieSearch,
    MovieCard,
    Spinner,
    MoviePagination,
    OptionsTab,
  },
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
  <div>
    <Container>
      <div class="py-8">
        <MovieSearch />
        <OptionsTab />
        <div class="mb-10">
          <div class="flex items-center justify-center" v-if="loading">
            <Spinner />
          </div>
          <div class="grid gap-y-3" v-else>
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </div>
        <MoviePagination />
      </div>
    </Container>
  </div>
</template>
<style></style>
