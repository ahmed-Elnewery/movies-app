<script>
export default {
  name: "MoviePagination",
};
</script>
<template>
  <div class="flex items-center justify-center">
    <ul class="flex items-center gap-x-4">
      <li v-for="n in 4" :key="n">
        <button
          class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 h-8"
        >
          {{ n }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style></style>
