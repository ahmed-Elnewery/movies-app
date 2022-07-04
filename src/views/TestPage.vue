<script>
import TestA from "@/components/UI/TestA.vue";
import { mapActions } from "vuex";

export default {
  components: { TestA },
  name: "TestPage",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    tripple() {
      return this.$store.getters.getTripleNumber;
    },
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    ...mapActions(["getAllMovies"]),
    increment() {
      this.$store.dispatch("incrementByOne");
    },
    incrementByTen() {
      this.$store.dispatch("incrementByPayload", { by: 10 });
    },
    clickMe: function () {
      alert("hi");
    },
  },
  created() {
    this.getAllMovies();
  },
};
</script>
<template>
  <div>
    <div>counter {{ counter }}</div>
    <div>tripple {{ tripple }}</div>
    <div>
      <button @click="increment">increment</button>
      <button @click="incrementByTen">increment by 10</button>
    </div>

    <hr />
    <div class="mt-8">
      <div
        class="px-4 py-3 bg-red-200 mb-2"
        v-for="movie in movies"
        :key="movie.id"
      >
        {{ movie.title }}
      </div>
    </div>
    <div class="mt-4">
      <TestA :callback="clickMe" :arr="[1, 2, 3, 4]" />
    </div>
  </div>
</template>

<style></style>
