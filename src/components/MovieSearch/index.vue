<script>
import SearchIcon from "../UI/SVG/SearchIcon.vue";
export default {
  components: { SearchIcon },
  name: "SearchComp",
  props: {
    value: String,
  },
};
</script>
<template>
  <div class="flex justify-center items-center mb-8">
    <div class="w-2/3 sm:w-1/2 relative">
      <input
        type="text"
        class="w-full block py-2.5 pl-10 pr-3 border border-gray-400 text-gray-800 rounded"
        placeholder="Search for movie.."
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <span
        class="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-600"
      >
        <SearchIcon />
      </span>
    </div>
  </div>
</template>
<style></style>
