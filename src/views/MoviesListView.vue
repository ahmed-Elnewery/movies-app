<script>
import Container from "@/components/layout/Container.vue";
import MovieSearch from "@/components/MovieSearch/index.vue";
import axios from "axios";
export default {
  components: { Container, MovieSearch },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/movies").then((res) => {
      const { data } = res;
      this.movies = data;
    });
  },
};
</script>
<template>
  <div>
    <Container>
      <div class="py-8">
        <MovieSearch />
        <div class="flex justify-end mb-6">
          <div>
            <button type="button">toggle sorting</button>
          </div>
        </div>
        <div class="grid gap-y-3">
          <div
            class="border rounded-md relative overflow-hidden shadow-lg"
            v-for="movie in movies"
            :key="movie.id"
          >
            <div class="flex">
              <img :src="movie.image" />
              <div class="p-4">
                <h3>{{ movie.title }}</h3>
                <div class="flex gap-x-4 mb-4">
                  <span>{{ movie.year }}</span>
                  <div class="flex items-center gap-x-1">
                    <img width="20" src="../assets/SVG/star-solid.svg" />
                    <span>{{ movie.imDbRating }}</span>
                  </div>
                </div>
                <div>
                  <p>{{ movie.crew }}</p>
                  <p>{{ movie.fullTitle }}</p>
                </div>
              </div>
            </div>
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
