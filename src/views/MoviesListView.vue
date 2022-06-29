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
      noSearchResultMsg: "",
      loading: false,
      movies: [],
      errorMsg: "",
      pageNum: 1,
      totalCount: 0,
      sortType: "asc",
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    onInputChange(value) {
      this.searchQuery = value;
    },
    nextPageHandler() {
      this.pageNum += 1;
    },
    prevPageHandler() {
      if (this.pageNum === 1) {
        return;
      }
      this.pageNum -= 1;
    },
    toggleSort() {
      this.pageNum = 1;
      if (this.sortType === "asc") {
        this.sortType = "desc";
      } else if (this.sortType === "desc") {
        this.sortType = "asc";
      }
    },
    fetchMovies() {
      this.loading = true;
      axios
        .get(
          `http://localhost:3000/movies/?_page=${this.pageNum}&q=${this.searchQuery}&_sort=rank&_order=${this.sortType}`
        )
        .then((res) => {
          const { data, headers } = res;
          const totalResult = headers["x-total-count"];
          this.totalCount = parseInt(totalResult);
          this.movies = data;
          this.loading = false;
        })
        .catch(() => {
          this.errorMsg = "Opps! something went wrong";
          this.loading = false;
        });
    },
  },
  watch: {
    searchQuery() {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          axios(
            `http://localhost:3000/movies/?_page=${this.pageNum}&q=${this.searchQuery}&_sort=rank&_order=${this.sortType}`
          ).then((res) => {
            if (res.data.length === 0) {
              this.noSearchResultMsg =
                "Sorry! there is no movie match your search ";
            }
            const totalResult = res.headers["x-total-count"];
            this.totalCount = parseInt(totalResult);
            this.movies = res.data;
            this.pageNum = 1;
          });

          this.awaitingSearch = false;
        }, 1000);
      }

      this.noSearchResultMsg = "";
      this.awaitingSearch = true;
    },
    pageNum() {
      this.fetchMovies();
    },
    sortType() {
      this.fetchMovies();
    },
  },
};
</script>
<template>
  <div>
    <Container>
      <div class="py-8">
        <MovieSearch :value="searchQuery" @input="onInputChange" />
        <OptionsTab :sortType="sortType" @toggleSort="toggleSort" />
        <div class="mb-10 min-h-[500px] flex items-center justify-center">
          <h2 v-if="noSearchResultMsg">{{ noSearchResultMsg }}</h2>
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
        <MoviePagination
          :moviesLength="movies.length"
          :pageNum="pageNum"
          @next="nextPageHandler"
          @prev="prevPageHandler"
          v-if="movies.length > 0"
          :moviesCount="totalCount"
        />
      </div>
    </Container>
  </div>
</template>
<style></style>
