<script>
export default {
  name: "MoviePagination",
  props: {
    pageNum: {
      type: Number,
      required: true,
    },
    moviesCount: {
      type: Number,
    },
  },
  computed: {
    noOfPages() {
      return Math.ceil(this.moviesCount / 10);
    },
  },
};
</script>
<template>
  <div>
    <div class="flex items-center justify-center">
      <ul class="flex items-center gap-x-4">
        <li>
          <button
            type="button"
            class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white p-2 disabled:cursor-not-allowed"
            @click="$emit('prev')"
            :disabled="pageNum === 1"
          >
            prev
          </button>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 p-2"
          >
            {{ pageNum }}
          </button>
        </li>
        <button
          type="button"
          class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white p-2 disabled:cursor-not-allowed"
          @click="$emit('next')"
          :disabled="pageNum === noOfPages"
        >
          next
        </button>
      </ul>
    </div>
    <!-- <div>pageNum{{ pageNum }}</div>
    <div>noOfPages{{ noOfPages }}</div>
    <div>moviesCount{{ moviesCount }}</div> -->
  </div>
</template>

<style></style>
