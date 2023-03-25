<template>
  <main>
    <ImageGallery :images="images"></ImageGallery>
  </main>
</template>

<script setup>
  import ImageGallery from './components/ImageGallery.vue';
</script>
<script>
  export default {
    data() {
      return {
        images: [
          "https://api.lorem.space/image/game?w=150&h=220&hash=8B7BCDC2",
          "https://api.lorem.space/image/game?w=150&h=220&hash=500B67FB",
          "https://api.lorem.space/image/game?w=150&h=220&hash=7F5AE56A",
          "https://api.lorem.space/image/game?w=150&h=220&hash=9D9539E7",
          "https://api.lorem.space/image/game?w=150&h=220&hash=B0E33EF4",
          "https://api.lorem.space/image/game?w=150&h=220&hash=BDC01094"
        ]
      }
    }
  }
</script>