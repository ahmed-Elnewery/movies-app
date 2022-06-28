<script>
export default {
  name: "SearchComp",
  props: {
    value: String,
  },
};
</script>
<template>
  <div class="flex justify-center items-center mb-8">
    <div class="w-2/3 sm:w-1/2">
      <input
        type="text"
        class="w-full block py-2.5 px-3 border border-gray-400 text-gray-800 rounded"
        placeholder="Search for movie.."
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>
<style></style>
