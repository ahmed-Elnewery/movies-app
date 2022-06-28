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
  <div class="border rounded-md relative overflow-hidden shadow-lg">
    <div class="flex">
      <img :src="movie.image" />
      <div class="p-4">
        <h3>{{ movie.title }}</h3>
        <div class="flex gap-x-4 mb-4">
          <span>{{ movie.year }}</span>
          <div class="flex items-center gap-x-1">
            <img width="20" src="../../assets/SVG/star-solid.svg" />
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
</template>

<style></style>
