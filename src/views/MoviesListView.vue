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
      searchQuery: "",
      awaitingSearch: false,
      noResultMessage: "",
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
  methods: {
    onInputChange(value) {
      this.searchQuery = value;
    },
  },
  watch: {
    searchQuery() {
      let timerId = null;
      clearTimeout(timerId);
      if (!this.awaitingSearch) {
        timerId = setTimeout(() => {
          axios(`http://localhost:3000/movies?q=${this.searchQuery}`).then(
            (res) => {
              if (res.data.length === 0) {
                this.noResultMessage =
                  "Sorry! there is no movie match your search ";
              }
              this.movies = res.data;
            }
          );
          this.awaitingSearch = false;
        }, 1000);
      }
      this.noResultMessage = "";
      this.awaitingSearch = true;
    },
  },
};
</script>
<template>
  <div>
    <Container>
      <div class="py-8">
        <MovieSearch :value="searchQuery" @input="onInputChange" />
        <OptionsTab />
        <div class="mb-10 min-h-[500px] flex items-center justify-center">
          <h2 v-show="noResultMessage">{{ noResultMessage }}</h2>
          <div
            class="flex items-center justify-center"
            v-if="loading | awaitingSearch"
          >
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
