<script>
export default {
  name: "TestPage",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>
<template>
  <div>test {{ counter }}</div>
</template>

<style></style>
