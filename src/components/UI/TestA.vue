<script>
export default {
  name: "TestA",
  props: {
    callback: {
      type: Function,
      required: true,
    },
    arr: {
      type: Array,
      required: true,
    },
  },
};
</script>
<template>
  <button class="border" @click="callback">click me</button>
</template>

<style></style>
