<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <router-link :to="'/movies/' + movie.id">
    <div
      class="border rounded-md relative overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105"
    >
      <div class="flex">
        <img :src="movie.image" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-violet-600 mb-4">
            {{ movie.title }}
          </h3>
          <div class="flex gap-x-4 mb-4">
            <span
              class="px-2 py-1 bg-sky-400 text-white rounded-full text-xs font-bold"
              >{{ movie.year }}</span
            >
            <div class="flex items-center gap-x-1">
              <img width="20" src="../../assets/SVG/star-solid.svg" />
              <span>{{ movie.imDbRating }}</span>
            </div>
          </div>
          <div class="text-sm text-gray-400">
            <p>{{ movie.crew }}</p>
            <p>{{ movie.fullTitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style></style>
