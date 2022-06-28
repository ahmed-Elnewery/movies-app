<script>
export default {
  name: "MoviesDetails",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
<template>
  <div>
    <h1>hello</h1>
    <h1>id-{{ id }}</h1>
  </div>
</template>
<style></style>
