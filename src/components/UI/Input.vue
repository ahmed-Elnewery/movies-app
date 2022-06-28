<template>
  <input
    class="border"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "InputComp",
  props: ["value"],
};
</script>

<style></style>
