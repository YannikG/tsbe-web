<template>
  <div class="d-flex flex-column min-vh-100">
    <Header></Header>
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<script lang="js">
  import { defineComponent } from 'vue'
  import Header from "./components/layouts/Header.vue";
  import {RouterView} from "vue-router";

  export default defineComponent({
    name: 'App',
    components: {Header, RouterView},
    setup() {

    },
  })
</script>
