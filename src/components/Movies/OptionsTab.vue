<script>
import AscSort from "../UI/SVG/AscSort.vue";
import DescSort from "../UI/SVG/DescSort.vue";
export default {
  components: { AscSort, DescSort },
  name: "OptionsTab",
  props: {
    sortType: {
      type: String,
      required: true,
      default: "desc",
    },
  },
};
</script>
<template>
  <div class="flex justify-end mb-6">
    <div>
      <button type="button" @click="$emit('toggleSort')" class="text-red-500">
        <AscSort v-if="sortType === 'desc'" />
        <DescSort v-if="sortType === 'asc'" />
      </button>
    </div>
  </div>
</template>

<style></style>
