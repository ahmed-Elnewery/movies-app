<script>
export default {
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
      <button type="button" @click="$emit('toggleSort')">{{ sortType }}</button>
    </div>
  </div>
</template>

<style></style>
