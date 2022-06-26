<script>
import Container from "@/components/layout/Container.vue";
export default {
  components: { Container },
};
</script>
<template>
  <div>
    <Container>
      <div class="py-8">
        <div class="flex justify-center items-center mb-8">
          <div class="w-2/3 sm:w-1/2">
            <input
              type="text"
              class="w-full py-2.5 px-3 border border-gray-400 text-gray-800 rounded"
              placeholder="Search for movie.."
            />
          </div>
        </div>
        <div class="flex justify-end mb-6">
          <div>
            <button type="button">toggle sorting</button>
          </div>
        </div>
        <div class="grid gap-y-3">
          <div class="h-44 border rounded"></div>
          <div class="h-44 border rounded"></div>
          <div class="h-44 border rounded"></div>
          <div class="h-44 border rounded"></div>
          <div class="h-44 border rounded"></div>
          <div class="h-44 border rounded"></div>
          <div class="h-44 border rounded"></div>
        </div>
        <div class="flex items-center justify-center mt-6">
          <ul class="flex items-center gap-x-4">
            <li>
              <button
                class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 h-8"
              >
                1
              </button>
            </li>
            <li>
              <button
                class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 h-8"
              >
                2
              </button>
            </li>
            <li>
              <button
                class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 text-white w-8 h-8"
              >
                3
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
</template>
<style></style>
