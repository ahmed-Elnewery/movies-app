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
            class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white transition p-2 disabled:cursor-not-allowed rounded"
            @click="$emit('prev')"
            :disabled="pageNum === 1"
          >
            Prev
          </button>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white transition w-8 px-3 py-2 rounded"
          >
            {{ pageNum }}
          </button>
        </li>
        <button
          type="button"
          class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white p-2 transition disabled:cursor-not-allowed rounded"
          @click="$emit('next')"
          :disabled="pageNum === noOfPages"
        >
          Next
        </button>
      </ul>
    </div>
    <!-- <div>pageNum{{ pageNum }}</div>
    <div>noOfPages{{ noOfPages }}</div>
    <div>moviesCount{{ moviesCount }}</div> -->
  </div>
</template>

<style></style>
