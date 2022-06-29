<script>
import axios from "axios";
import Spinner from "@/components/UI/Spinner.vue";
import Container from "@/components/layout/Container.vue";
export default {
  components: { Spinner, Container },
  name: "MoviesDetails",
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
      movie: {
        type: Object,
      },
      errorMsg: "",
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(`http://localhost:3000/movies/${this.id}`)
      .then((res) => {
        const { data } = res;
        this.movie = data;
        this.loading = false;
      })
      .catch(() => {
        this.errorMsg = "Opps ! Something went wrong";
        this.loading = false;
      });
  },
};
</script>
<template>
  <Container>
    <div class="py-8">
      <div class="flex items-center justify-center" v-if="loading">
        <Spinner />
      </div>
      <div class="text-center" v-else>
        <img :src="movie.image" class="w-full h-48 object-contain" />
        <h1 class="text-3xl font-bold mt-4">{{ movie.title }}</h1>
      </div>
    </div>
  </Container>
</template>
<style></style>
