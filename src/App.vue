<template>
  <div id="app">
    <div class="flex flex-col min-h-screen">
      <Header />
      <main>
        <MoviesListView />
      </main>
      <footer
        class="h-14 bg-gradient-to-r from-slate-500 to-slate-900"
      ></footer>
    </div>
  </div>
</template>

<script>
import MoviesListView from "./views/MoviesListView.vue";
import Header from "./components/layout/Header.vue";
export default {
  name: "App",
  components: { MoviesListView, Header },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: "Roboto", sans-serif;
}
</style>
